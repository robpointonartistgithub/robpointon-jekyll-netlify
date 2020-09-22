//https://polypane.app/blog/the-perfect-responsive-menu/
const toggleMenu = document.querySelector('.nav button');
const menu = document.querySelector('.nav .nav__links');
const menuSecondary = document.querySelector('.nav .secondary-nav__links');

toggleMenu.addEventListener('click', function() {
  const open = JSON.parse(toggleMenu.getAttribute('aria-expanded'));
  toggleMenu.setAttribute('aria-expanded', !open);
  menu.hidden = !menu.hidden;
  menuSecondary.hidden = !menuSecondary.hidden;
});

//Hide/reveal navigation on scroll odwn/scroll up
/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
const toggleMasthead = document.getElementById("masthead");

var mastheadHeight= toggleMasthead.offsetHeight;
var mastheadOffset= mastheadHeight / 2;
//console.log(mastheadHeight);
//console.log(mastheadOffset);
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  
  if (currentScrollPos < 1) {
  	toggleMasthead.classList.remove("scrollingUp", "scrollingDown");
  	toggleMasthead.classList.add("scrolledUp");
  	//console.log("Inside scrolledUp");
  }

  else if (prevScrollpos > currentScrollPos ) {
    toggleMasthead.classList.remove("scrolledUp", "scrollingDown");
    toggleMasthead.classList.add("scrollingUp");
    //console.log("Inside scrollingUp");
    //console.log("prevScrollpos:", prevScrollpos, "currentScrollPos:", currentScrollPos );
  
  } else if (prevScrollpos < currentScrollPos && currentScrollPos >  mastheadOffset) {
    toggleMasthead.classList.remove("scrolledUp", "scrollingUp");
    toggleMasthead.classList.add("scrollingDown");
    //console.log("Inside scrollingDown");
    //console.log("prevScrollpos:", prevScrollpos, "currentScrollPos:", currentScrollPos );

  }

  prevScrollpos = currentScrollPos;
  
  /*if (currentScrollPos > 300) {
  	toggleMasthead.classList.add("logo-small");
  }
  else {
  	toggleMasthead.classList.remove("logo-small");
  }*/


  
}

