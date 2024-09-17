const menuBtn = document.querySelector('.menu__btn');
const hambugger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const  menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');

let showMenu = false;

menuBtn.addEventListener('click',toggleMenu);

function toggleMenu(){
    if(!showMenu){
        hambugger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item =>{
            item.classList.add('open');
        })

        showMenu = true;
    } else{
        hambugger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item =>{
            item.classList.remove('open');
        })

        showMenu = false
    }
}