const MenuBtn = document.getElementById('toggleMenu');
const ModalWindow = document.querySelector('.ModalWindow');


MenuBtn.addEventListener('click', function() {
    MenuBtn.classList.toggle('open-menu');
    ModalWindow.classList.toggle('active');
})