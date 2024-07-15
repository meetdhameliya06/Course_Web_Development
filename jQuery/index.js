
//     $("h1").css("color","red");


// $("a").attr("href","https://www.keybr.com/");
// $("a").text("Typing");






// for(var i =0; i<5 ; i++){
//     document.querySelectorAll("button")[i].addEventListener("click",function(){
//         document.querySelector("h1").style.color = "purple";
//     })
// }




// $("button").click(function(){
//     $("h1").css("color","blue");
// });




// $("input").keypress(function(event){
//      $("h1").text(event.key);

// });



// $("h1").on("mouseover",function(){
//     $("h1").css("color","red");
//     $("h1").css("font-size","150px");

// });


// $("h1").prepend("<a>Hey</a>");
// $("h1").append("<a>Bye</a>");



$("h1").on("mouseover",function(){
    $("h1").animate({opacity : 1}).delay(100).animate({opacity : 0.5});
    
});

$("h1").on("click",function(){
    $("h1").slideDown().slideUp().slideDown().animate({opacity : 0.5});
    
});

