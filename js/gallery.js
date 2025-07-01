document.addEventListener('DOMContentLoaded', () => {
  const galleryImages = Array(6).fill('bandet3.png');
  const grid = document.querySelector('.gallery-grid');
  if (!grid) return;

  galleryImages.forEach(src => {
    const a = document.createElement('a');
    a.href = `images/${src}`;
    const img = document.createElement('img');
    img.src = `images/${src}`;
    img.alt = 'Konfetti gallery image';
    a.appendChild(img);
    grid.appendChild(a);
  });
});
