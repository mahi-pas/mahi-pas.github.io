

// Animated Mesh Mouse Hover
let mesh_mouse_hover = document.getElementById("mesh-mouse-hover");
const onMouseMove = (e) => {
    const style = getComputedStyle(mesh_mouse_hover);
    mesh_mouse_hover.style.left = `calc(${e.clientX}px - (${style.width}/2))`;
    mesh_mouse_hover.style.top = `calc(${e.clientY}px - (${style.height}/2))`;
};
document.addEventListener("mousemove", onMouseMove);

//Show on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else {
            //entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

//Experience Box
function toggleExperience(experienceID) {
    $(experienceID).slideToggle(400);
}

//Smooth scroll
function smoothScroll(target) {
    $('html,body').animate({
        scrollTop: $(target).offset().top},
        'slow');
}

//Slideshow
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("project-slide");
    let dots = document.getElementsByClassName("dot");
    let desciption = document.getElementById("slide-description");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";

    //Change description text
    let loadedText = slides[slideIndex-1].querySelector('.slide-description-text').textContent;
    desciption.textContent = loadedText;
}


