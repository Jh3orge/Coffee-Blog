const row = document.querySelector(".carousel-content");
const blogPost = document.querySelectorAll(".blog-post");

const leftAngle = document.getElementById("left");
const rightAngle = document.getElementById("right");

const scrollOne = document.getElementById("featured-posts");
const scrollTwo = document.getElementById("latest-posts");

//////////// Left Angle EVENT LISTENER ///////////////////

leftAngle.addEventListener("click", () => {
    row.scrollLeft -= row.offsetWidth;

    const activeIndicator = document.querySelector(".indicators .active");
    if (activeIndicator.previousSibling) {
        activeIndicator.previousSibling.classList.add("active");
        activeIndicator.classList.remove("active");
    };

});

////////////////// Right Angle EVENT LISTENER ////////////////////

rightAngle.addEventListener("click", () => {
    row.scrollLeft += row.offsetWidth;

    const activeIndicator = document.querySelector(".indicators .active");
    if (activeIndicator.nextSibling) {
        activeIndicator.nextSibling.classList.add("active");
        activeIndicator.classList.remove("active");
    };
});

/////////////////////////////// SCROLL ANIMATION //////////////////////////////

const visibleObject = (entries, observer) => {
    
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("visible");
        } else {
            entry.target.classList.remove("visible");
        }
    });
}

const observer = new IntersectionObserver(visibleObject, {
    root: null,
    rootMargin: '0px',
    threshold: 0
});

observer.observe(scrollOne);
observer.observe(scrollTwo);


//////////////////////////////////////RESPONSIVE MENU /////////////////////////////
const navToggle = document.querySelector(".toggle");
const navMenu = document.querySelector(".nav-items");

navToggle.addEventListener ("click", () => {
    navMenu.classList.toggle("nav-items_visible");
});


