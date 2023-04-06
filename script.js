

// Sidebar 
$('.btn').click(function(){
    $(this).toggleClass("click");
    $('.sidebar').toggleClass("show");
});

$('.portfolio-btn').click(function(e){
    e.preventDefault();
    $('nav ul .portfolio-show').toggleClass("show");
    $('nav ul .first').toggleClass("rotate");
});

//Experience Box
$('.experience-box').click(function(){
    console.log("hi");
    $('.experience-info').toggle(1000);
});

function ExperienceBox(id){
    var info = document.getElementById(id);
    //info.toggle(1000);
    info.hide();
}
