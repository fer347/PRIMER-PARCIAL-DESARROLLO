function loadComponent(id, file) {
  return fetch(file)
    .then(res => {
      if (!res.ok) {
        throw new Error("Error cargando " + file);
      }
      return res.text();
    })
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
}

// Cargar todos los componentes
Promise.all([
  loadComponent('header', 'components/header/header.html'),
  loadComponent('sidebar', 'components/sidebar/sidebar.html'),
  loadComponent('footer', 'components/footer/footer.html')
]).then(() => {

  // 🔥 Seleccionar elementos
  const menuBtn = document.getElementById("menuBtn");
  const sidebar = document.getElementById("sidebar");

  // ✅ Abrir / cerrar sidebar con botón
  if (menuBtn && sidebar) {
    menuBtn.addEventListener("click", function (e) {
      e.stopPropagation(); // evita que se cierre inmediatamente
      sidebar.classList.toggle("active");
    });
  }

  // ✅ Cerrar sidebar al hacer click fuera
  document.addEventListener("click", function (e) {
    if (sidebar && menuBtn) {
      if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
        sidebar.classList.remove("active");
      }
    }
  });

});