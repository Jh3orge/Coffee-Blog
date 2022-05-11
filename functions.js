const row = document.querySelector(".carousel-content");
const blogPost = document.querySelectorAll(".blog-post");

const leftAngle = document.getElementById("left");
const rightAngle = document.getElementById("right");

let parallax = document.querySelector(".test-parallax");

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