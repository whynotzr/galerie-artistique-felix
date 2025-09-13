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