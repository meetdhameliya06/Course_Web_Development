
    
    var numberofdrum = document.querySelectorAll(".drum").length;
    for(var i=0 ; i < numberofdrum ; i++){
        document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        
            


            var buttonInnerHTML = this.innerHTML;

            makeSound(buttonInnerHTML);
            
            buttonAnimation(buttonInnerHTML);

            

        });
    }
document.addEventListener("keypress",function(event){
    makeSound(event.key);

    buttonAnimation(currentkey);
    
        });

function makeSound(key){
                switch (key) {
                case "w":
                    var audio = new Audio("sounds/music1.mp3");
                    audio.play(); 
                    break;
                case "a":
                    var audio3 = new Audio("sounds/music2.mp3");
                    audio3.play(); 
                    break;
                case "s":
                    var audio4 = new Audio("sounds/music3.mp3");
                    audio4.play(); 
                    break;
                case "d":
                    var audio5 = new Audio("sounds/music4.mp3");
                    audio5.play(); 
                    break;
                case "j":
                    var audio6 = new Audio("sounds/music5.mp3");
                    audio6.play(); 
                    break; 
                case "k":
                    var audio7 = new Audio("sounds/music6.mp3");
                    audio7.play(); 
                    break;   
                case "l":

                    var audio8 = new Audio("sounds/music7.mp3");
                    audio8.play(); 
                    break;        

                default:
                    console.log(key);
                        
            }
        }

    
       function buttonAnimation(currentkey){

        var activeButton = document.querySelector("." + currentkey);
        
        activeButton.classList.add("pressed");

        setTimeout(function(){
            activeButton.classList.remove("pressed");
        },100);
       }
    




    
    // var audio = new Audio("music/music1.mp3");
    // audio.play();


