// Sidebar
$(".btn").click(function () {
    $(this).toggleClass("click");
    $(".sidebar").toggleClass("show");
});

$(".portfolio-btn").click(function (e) {
    e.preventDefault();
    $("nav ul .portfolio-show").toggleClass("show");
    $("nav ul .first").toggleClass("rotate");
});


//Experience Box
function toggleExperience(experienceID) {
    $(experienceID).slideToggle(400);
}

