document.addEventListener('DOMContentLoaded', () => {
  const img = document.getElementById('toggle-menu');
  const menuMovil = document.getElementById('menu-movil');

  img.addEventListener('click', () => {
    menuMovil.classList.toggle('activo');
  });

  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }
  
});
