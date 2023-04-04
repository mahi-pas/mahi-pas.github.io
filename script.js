

// Sidebar 
$('.btn').click(function(){
    $(this).toggleClass("click");
    $('.sidebar').toggleClass("show");
});

$('.portfolio-btn').click(function(){
    $('nav ul .portfolio-show').toggleClass("show");
    $('nav ul .first').toggleClass("rotate");
});
