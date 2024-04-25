import Alpine from 'alpinejs';
window.Alpine = Alpine;
Alpine.start();

function updateViewportSize() {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const viewportSize = document.getElementById('viewportSize');
  if (viewportWidth < 300 || viewportHeight < 300) {
    viewportSize.innerHTML = `
      <h2 class="text-xl uppercase font-bold tracking-wide mb-2 text-red-700">Display too small</h2>
      <p class="text-sm font-bold">Please enlarge your browser window to continue</p>
    `;
  } else {
    viewportSize.innerHTML = `
      <h2 class="text-2xl uppercase font-bold tracking-wide mb-2">Viewport</h2>
      <p class="text-4xl">${viewportWidth} - ${viewportHeight}</p>
    `;
  }
}

updateViewportSize();
window.addEventListener('resize', updateViewportSize);
