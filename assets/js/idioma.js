document.addEventListener('DOMContentLoaded', () => {
  const botones = document.querySelectorAll('[data-lang]');
  const links = document.querySelectorAll('[data-key]');

  let idiomaActual = localStorage.getItem('idioma') || (navigator.language.startsWith('es') ? 'es' : 'en');

  function cargarIdioma(idioma) {
    fetch('/assets/json/cv.json')
      .then(res => res.json())
      .then(data => {
        const textos = data[idioma];
        links.forEach(link => {
          const key = link.getAttribute('data-key');
          if (textos[key]) {
            link.textContent = textos[key];
          }
        });
        localStorage.setItem('idioma', idioma);
      })
      .catch(err => console.error('Error cargando idioma:', err));
  }

  // Carga inicial
  cargarIdioma(idiomaActual);

  // Listener para botones
  botones.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (lang !== idiomaActual) {
        idiomaActual = lang;
        cargarIdioma(lang);
      }
    });
  });
});
