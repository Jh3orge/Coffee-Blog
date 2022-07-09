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