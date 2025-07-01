document.addEventListener('DOMContentLoaded', () => {
  // galleryImages is generated at build time by scripts/generateGallery.js
  if (typeof galleryImages === 'undefined') return;
  const grid = document.querySelector('.gallery-grid');
  if (!grid) return;

  galleryImages.forEach(src => {
    const a = document.createElement('a');
    a.href = src;
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Konfetti gallery image';
    a.appendChild(img);
    grid.appendChild(a);
  });
});
