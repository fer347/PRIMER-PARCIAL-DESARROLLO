function loadComponent(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(data => document.getElementById(id).innerHTML = data);
}

loadComponent('header', 'components/header/header.html');
loadComponent('sidebar', 'components/sidebar/sidebar.html');
loadComponent('footer', 'components/footer/footer.html');