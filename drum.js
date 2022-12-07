for (var i=0; i < document.querySelectorAll("button").length; i++) {
// click event listener
document.querySelectorAll("button")[i].addEventListener("click", function() {
  var butn = this.innerHTML;
  makesound(butn);
  buttonAnimation(butn);

  } //anony fn close
  );  //document.img close
} //for loop close


document.addEventListener("keypress",function(event) {
console.log(event.key);
makesound(event.key);
buttonAnimation(event.key);
})


function makesound(butnelem) {
      switch (butnelem) {
    case 'q':
      var audio = new Audio('sound/q.mp3');
  audio.play();
    break;

    case 'w':
      var audio = new Audio('sound/w.mp3');
  audio.play();
    break;

    case 'e':
      var audio = new Audio('sound/e.mp3');
  audio.play();
    break;

    case 'r':
      var audio = new Audio('sound/r.mp3');
  audio.play();
    break;

    case 't':
      var audio = new Audio('sound/t.mp3');
  audio.play();
    break;

    case 'y':
      var audio = new Audio('sound/y.mp3');
  audio.play();
    break;

    case 'u':
      var audio = new Audio('sound/u.mp3');
  audio.play();
    break;

    case 'i':
      var audio = new Audio('sound/i.mp3');
  audio.play();
    break;
      case 'o':
      var audio = new Audio('sound/o.mp3');
  audio.play();
    break;

    case 'p':
      var audio = new Audio('sound/p.mp3');
  audio.play();
  break;





    case 'a':
      var audio = new Audio('sound/a.mp3');
  audio.play();
    break;

    case 's':
      var audio = new Audio('sound/s.mp3');
  audio.play();
    break;

    case 'd':
      var audio = new Audio('sound/d.mp3');
  audio.play();
    break;

    case 'f':
      var audio = new Audio('sound/f.mp3');
  audio.play();
    break;

    case 'j':
      var audio = new Audio('sound/j.mp3');
  audio.play();
    break;
    case 'g':
      var audio = new Audio('sound/g.mp3');
  audio.play();
    break;

    case 'h':
      var audio = new Audio('sound/h.mp3');
  audio.play();
    break;

    case 'k':
      var audio = new Audio('sound/k.mp3');
  audio.play();
    break;

    case 'l':
      var audio = new Audio('sound/l.mp3');
  audio.play();
    break;

    case ';':
      var audio = new Audio('sound/semicoln.mp3');
  audio.play();
    break;



case 'z':
      var audio = new Audio('sound/z.mp3');
  audio.play();
    break;

    case 'x':
      var audio = new Audio('sound/x.mp3');
  audio.play();
    break;

    case 'c':
      var audio = new Audio('sound/c.mp3');
  audio.play();
    break;

    case 'v':
      var audio = new Audio('sound/v.mp3');
  audio.play();
    break;

    case 'b':
      var audio = new Audio('sound/b.mp3');
  audio.play();
    break;

    case 'n':
      var audio = new Audio('sound/n.mp3');
  audio.play();
    break;

    case 'm':
      var audio = new Audio('sound/m.mp3');
  audio.play();
    break;

    case ',':
      var audio = new Audio('sound/comma.mp3');
  audio.play();
    break;
      case '.':
      var audio = new Audio('sound/fullstop.mp3');
  audio.play();
    break;

    case '/':
      var audio = new Audio('sound/forwslash.mp3');
  audio.play();
  break;




    case "1":
    toggleplay(1);
    break;
    case "2":
    toggleplay(2);
    break;
    case "3":
    toggleplay(3);
    break;
    case "4":
    toggleplay(4);
    break;
    case "5":
    toggleplay(5);
    break;
    case "6":
    toggleplay(6);
    break;
    case "7":
    toggleplay(7);
    break;
    case "8":
    toggleplay(8);
    break;
    case "9":
    toggleplay(9);
    break;
    case "0":
    toggleplay(10);
    break;

    default:
    console.log(butnelem);
  }
  }


// FOR AUDIO play
var playflag=[1,1,1,1,1,1,1,1,1,1];
function toggleplay(buttonid) {
  var audio = document.getElementById("audio"+buttonid);
  var playbutton = document.getElementById("tbtn"+buttonid);
  if (playflag[buttonid-1]==0) {
    audio.loop=false;
    audio.pause();
    playflag[buttonid-1]=1;
    switch (buttonid) {
      case 1:
      playbutton.value = "1🎤";
      break;
      case 2:
      playbutton.value = "2🎸";
      break;
      case 3:
      playbutton.value = "3📯";
      break;
      case 4:
      playbutton.value = "4🎺";
      break;
      case 5:
      playbutton.value = "5🎹";
      break;
      case 6:
      playbutton.value = "6🎧";
      break;
      case 7:
      playbutton.value = "7🎼";
      break;
      case 8:
      playbutton.value = "8🎶";
      break;
      case 9:
      playbutton.value = "9🎵";
      break;
      case 10:
      playbutton.value = "0🎷";
      break;


        break;


      default: playbutton.value = "▶️";

    }

  } else if (playflag[buttonid-1]==1){
    audio.loop=true;
    audio.play();
    playflag[buttonid-1]=0;
    playbutton.value = "⏹️";
  }
  console.log(playflag);

}
// AUDIO PLAY END


function buttonAnimation(currentkey) {
  classSelector = "."+currentkey;
  if (currentkey == ";") {
    classSelector=".semicoln";
  } else if (currentkey == ",") {
    classSelector=".comma";
  } else if (currentkey == ".") {
    classSelector=".fullstop";
  } else if (currentkey == "/") {
    classSelector=".forwslash";
  }


  var activeButton = document.querySelector(classSelector);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },150);


}
