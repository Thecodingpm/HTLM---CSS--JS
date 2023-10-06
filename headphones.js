/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

    //    Menue show   //
    // validate if constant exist //


    if(navToggle){
        navToggle.addEventListener('click',() =>{
navMenu.classList.add('show-menu')
        })
    }
    // menu hidden //
    // validate if constant exist //


if(navClose){
    navClose.addEventListener('click',() =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const LinkAction = () =>{ 
    const navMenu = document.getElementById('nav-menu')
// when we click on each nav link //
    navMenu.classList.remove('show-menu') 

}
navLink.forEach(n => n.addEventListener('click', LinkAction))

/*=============== ADD BLUR HEADER ===============*/


/*=============== SWIPER FAVORITES ===============*/ 


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
