/*=============== SHOW SIDEBAR ===============*/


/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */


/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */


/*=============== SKILLS TABS ===============*/


/*=============== MIXITUP FILTER PORTFOLIO ===============*/

/*===== Link Active Work =====*/


/*===== Work Popup =====*/
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("work__button")) {
    togglePortfolioPopup();
    portfolioItemDetails(e.target.parentElement);
  }
})

function togglePortfolioPopup() {
  document.querySelector(".portfolio__popup").classList.toggle("open");
}



/*=============== SERVICES MODAL ===============*/


/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== INPUT ANIMATION ===============*/
const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
})




/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// Get all sections that have an id defined
const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Remove the active class from all links
    navLinks.forEach(link => link.classList.remove('active'));
    // Add the active class to the clicked link
    link.classList.add('active');
  });
});

// Get all the sections with class 'section'
const sections = document.querySelectorAll('.section');

// Add an event listener to the window object
window.addEventListener("scroll", navHighlighter);

function navHighlighter()
{
    //get current scroll position
    let scrolly = window.pageYOffset;
    //Now we Loop through each sections to get height, top and ID values for each.
    sections.forEach(current => {
        const sectionTop = section.offsetTop = 50,
        const sectionHeight = section.offsetHeight;
        sectionId = current.getAttribute("id");

    if (scrolly > sectionTop && scrolly <= sectionTop + sectionHeight) 
    {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add("active-link");
    } 
    else 
    {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove("active-link");
    }
  })
}

/*=============== SHOW SCROLL UP ===============*/