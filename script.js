

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
            entry.target.classList.remove('show');
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
