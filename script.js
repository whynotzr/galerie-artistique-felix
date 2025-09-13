document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".gallery img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.getElementById("lightbox-close");

  images.forEach(img => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.style.display = "flex";
      document.body.style.overflow = "hidden";
    });
  });

  function closeLightbox() {
    lightbox.style.display = "none";
    document.body.style.overflow = "";
    lightboxImg.src = "";
  }

  closeBtn.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
});
// Lightbox pour la galerie
const galleryImages = document.querySelectorAll('.gallery img');
const lightbox      = document.getElementById('lightbox');
const lightboxImg   = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.style.display = 'flex';
  });
});

lightboxClose.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// === Bulles artistiques ===
function random(min, max) {
  return Math.random() * (max - min) + min;
}

function createBubble() {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');

  const size = random(20, 80);
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;

  // Position horizontale aléatoire
  bubble.style.left = `${random(0, window.innerWidth)}px`;

  // Couleur pastel aléatoire
  const colors = ['#ffb347','#f67280','#99e2b4','#90dbf4','#f9c74f','#f8961e','#f94144'];
  bubble.style.background = colors[Math.floor(Math.random() * colors.length)];

  // Durée d'animation variable
  const duration = random(10, 25);
  bubble.style.animationDuration = `${duration}s`;

  document.getElementById('animated-bg').appendChild(bubble);

  setTimeout(() => bubble.remove(), duration * 1000);
}

// Crée régulièrement de nouvelles bulles
setInterval(createBubble, 800);