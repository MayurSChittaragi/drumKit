var buttons = document.querySelectorAll(".drum");
var b_no = buttons.length;

function drumSelect(char){
    switch (char) {
        case 'w':
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case 'a':
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        default:
            console.log(char);
            break;
    }
}


for(var i = 0; i < b_no; i ++){
    buttons[i].addEventListener("click", function (){
    
        // // alert("I got Clicked!");
        var button = this.innerHTML;
        drumSelect(button);

        addAnimation(button);

        //change the text color to white when tapped,
        
        // this.style.color = "white";

        // console.log(this.innerHTML); 
        

    });
}


document.addEventListener('keydown', function(event){
    drumSelect(event.key);
    addAnimation(event.key);
});


function addAnimation(keyPressed){
    var activeKey = document.querySelector("."+keyPressed);
    activeKey.classList.add("pressed");

    setTimeout(function()  {
        activeKey.classList.toggle("pressed");
    }, 100);
}


//event is just a variable name and not a keyword
