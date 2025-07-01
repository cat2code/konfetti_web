document.addEventListener('DOMContentLoaded', () => {
  // galleryImages is generated at build time by scripts/generateGallery.js
  if (typeof galleryImages === 'undefined') return;
  const grid = document.querySelector('.gallery-grid');
  if (!grid) return;
  const toggleBtn = document.getElementById('gallery-toggle');
  const openText = toggleBtn ? toggleBtn.dataset.openText : '';
  const closeText = toggleBtn ? toggleBtn.dataset.closeText : '';

  galleryImages.forEach(src => {
    const a = document.createElement('a');
    a.href = src;
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Konfetti gallery image';
    a.appendChild(img);
    grid.appendChild(a);
  });

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      if (grid.classList.contains('open')) {
        grid.style.maxHeight = '0';
        grid.classList.remove('open');
        toggleBtn.textContent = openText;
      } else {
        grid.style.maxHeight = grid.scrollHeight + 'px';
        grid.classList.add('open');
        toggleBtn.textContent = closeText;
      }
    });
    // Ensure closed state on load
    grid.style.maxHeight = '0';
    toggleBtn.textContent = openText;
  }
});
