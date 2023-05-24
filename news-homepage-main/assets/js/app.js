

document.addEventListener('DOMContentLoaded', ()=>{
    init();
});

function init(){
    const menuBtn = document.querySelector('.nav__menu');

    menuBtn.addEventListener('click', showMenu)
}

function showMenu(e){
    const menu = document.querySelector('.nav');

    menu.classList.toggle('show_menu');
}