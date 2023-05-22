/*
document.querySelector("button").addEventListener("click", handleClick);
// Function that does something when the buttons on the page are clicked
function handleClick(){
    alert("I got clicked");
}

// the function above is an anonymous function as it is passed as an argument. Therefore it can be written as
document.querySelector("button").addEventListener("click", handleClick);
*/

// Targetting all the buttons
var drumButtons = document.querySelectorAll(".drum");


for (var i = 0; i < drumButtons.length; i++){
    var buttonClass = drumButtons[i].classList[0];
    document.querySelector("."+buttonClass).addEventListener("click", function (){
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });

    document.addEventListener("keypress", function(Event){
        makeSound(Event.key);
        buttonAnimation(Event.key);
    });

}

function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
       
        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;

        case "l":
            var crash = new Audio("./sounds/crash.mp3");    
            crash.play();
            break;

        default:
            console.log(key);
            break;
       }
}

function buttonAnimation(currentKey){
    var pressedButton = document.querySelector("."+currentKey);
    pressedButton.classList.add("pressed");

    // Animating the button press by using timeout function
    setTimeout(function() {
        pressedButton.classList.remove("pressed");
    }, 100);
}