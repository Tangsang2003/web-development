// $(document).ready(()=>{
//     $("h1").css("color", "green");
// })
$("h1").addClass("big-heading");

$("h1").click(()=>{
    $("h1").css("color", "purple");
});

$(document).keypress((event)=> {
    $("h1").text(event.key);
});

$("button").on("click", ()=> {
    $("h1").animate({opacity: 0.5});
});
