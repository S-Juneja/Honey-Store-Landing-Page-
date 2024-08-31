const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 80)
    // Class of Header changes to sticky on scrolling down
    // on up no class(previous state)
    // Now different CSS styling applies 
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};
// Menu icon pe click se menu show hota h

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};
// Scrolling pr menu hide ho jata h

const sr = ScrollReveal({
    origin: 'top',
    distance: '85px',
    duration: 2500,
    reset: true
});

// Delayed effect using scrollreveal
sr.reveal('.home-text' , {delay:300});
sr.reveal('.home-img' , {delay:400});
sr.reveal('.container' , {delay:400});

sr.reveal('.about-img' , {});
sr.reveal('.about-text' , {delay:300});

sr.reveal('.middle-text' , {});
sr.reveal('.row-btn,.shop-content', {delay:300});

sr.reveal('.contact,.review-content', {delay:300});
