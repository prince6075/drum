// detecting click press

var numberofDrum=document.querySelectorAll(".drum").length;
for(var i=0;i<numberofDrum;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
    {
        var button_inner_html=this.innerHTML;
        makesound(button_inner_html);
        ButtonAnimation(button_inner_html);

    });
}

// detecting keybord press
document.addEventListener("keypress",function(event)
    {
        makesound(event.key);
        ButtonAnimation(event.key);
    });





function makesound(key)
{
    
    switch(key){
        case "w":
          var tom1=new Audio("sounds/tom-1.mp3");
          tom1.play();
          break

          case "a":
          var tom2=new Audio("sounds/tom-2.mp3");
          tom2.play();
          break


          case "s":
          var tom3=new Audio("sounds/tom-3.mp3");
          tom3.play();
          break;

          case "d":
          var tom4=new Audio("sounds/tom-4.mp3");
          tom4.play();
          break;

          case "j":
          var snare=new Audio("sounds/snare.mp3");
          snare.play();
          break;

          case "k":
          var crash=new Audio("sounds/kick-bass.mp3");
          crash.play();
          break;

          case "l":
          var kick=new Audio("sounds/crash.mp3");
          kick.play();
          break;

     default:

        
    }

    
}

function ButtonAnimation(curentkey)
{
 var Activebutton =document.querySelector("." + curentkey);
 
 Activebutton.classList.add("pressed");

 setTimeout(function(){
    Activebutton.classList.remove("pressed")
 },100);
}