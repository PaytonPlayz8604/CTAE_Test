document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');

    hamburgerMenu.addEventListener('click', () => {
        document.body.classList.toggle('open');
    });
});
