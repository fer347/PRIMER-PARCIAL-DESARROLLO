// Detecta la profundidad de la página automáticamente
function getBase() {
  const path = window.location.pathname;
  if (path.includes("Documento-sidebar/productos")) return "/";
  return "/";
}

function loadComponent(id, file) {
  return fetch("/" + file)
    .then(res => res.text())
    .then(data => {
      const el = document.getElementById(id);
      if (el) el.innerHTML = data;
    });
}

Promise.all([
  loadComponent('header', 'components/header/header.html'),
  loadComponent('sidebar', 'components/sidebar/sidebar.html'),
  loadComponent('footer', 'components/footer/footer.html')
]).then(() => {

  const menuBtn = document.getElementById("menuBtn");
  const sidebar = document.getElementById("sidebar");

  if (menuBtn && sidebar) {
    menuBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      sidebar.classList.toggle("active");
    });
  }

  document.addEventListener("click", function (e) {
    if (sidebar && menuBtn) {
      if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
        sidebar.classList.remove("active");
      }
    }
  });

});