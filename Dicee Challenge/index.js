

var RandomNumber1 = Math.floor(Math.random() * 6) + 1;

var RandonDicee = "dice" + RandomNumber1 + ".png";

var RandomImage = "images/" + RandonDicee;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", RandomImage);




var RandomNumber2 = Math.floor(Math.random() * 6) + 1;

var RandomImage2 = "images/dice" + RandomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", RandomImage2);


if(RandomNumber1>RandomNumber2){
    document.querySelector("h1").innerHTML="Player 1 is win !!"
}
else if(RandomNumber2>RandomNumber1){
    document.querySelector("h1").innerHTML="Player 2 is win !!"
}
else{
    document.querySelector("h1").innerHTML="Draww !!"
}

