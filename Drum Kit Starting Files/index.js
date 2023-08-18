




for (var i=0;i<document.querySelectorAll(".drum").length;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    makeSound(this.innerHTML);
    animation(this.innerHTML);
  });
}

function makeSound(alphabet){
  switch (alphabet) {
    case "w":
    var c=new Audio("sounds/crash.mp3");
    c.play();
      break;
      case "a":
      var k=new Audio("sounds/kick-bass.mp3");
      k.play();
        break;
        case "s":
        var s=new Audio("sounds/snare.mp3");
        s.play();
          break;
          case "d":
          var t1=new Audio("sounds/tom-1.mp3");
          t1.play();
            break;
            case "j":
            var t2=new Audio("sounds/tom-2.mp3");
            t2.play();
              break;
              case "k":
              var t3=new Audio("sounds/tom-3.mp3");
              t3.play();
                break;
                case "l":
                var t4=new Audio("sounds/tom-4.mp3");
                t4.play();
                  break;

    default:
    alert("Nit bhgh.");


  }

}
document.addEventListener("keydown",function(event){
  makeSound(event.key);
  animation(event.key);
});


function animation(key){
  var activeButton=document.querySelector("."+key);
  activeButton.classList.add("pressed");


  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}
// function add(a,b){
//   return a+b;
// }
// function sub(a,b){
//   return a-b;
// }
// function mul(a,b){
//   return a*b;
// }
// function div(a,b){
//   return a/b;
// }
// function calculate(a,b,oprator){
//   return oprator(a,b);
// }
