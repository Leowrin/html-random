var result =-1;
var x;
var y;

function load() {
  alert("Here are the basic rules my chonchon :D\n\n1.\tClick on start to start\n\n2.\tThen, Shrempfs will pop randomly on your screen,\n\t kill them by clicking on their heads.\n\n\n(works best with FireFox or Chrome)")
}

function back(){
  document.getElementById("maindiv").style.backgroundImage = "url('https://media.giphy.com/media/yfwaJWNEEZQys/giphy.gif')";
  setTimeout(back2, 5000);
}
function back2(){
  document.getElementById("maindiv").style.backgroundImage = "url('https://media.giphy.com/media/TmH5Zk8cbbqrS/giphy.gif')";
  setTimeout(back3, 5000);
}
function back3(){
  document.getElementById("maindiv").style.backgroundImage = "url('https://media.giphy.com/media/SW5k2eirzkzAc/giphy.gif')";
  setTimeout(back4, 5000);
}
function back4(){
  document.getElementById("maindiv").style.backgroundImage = "url('https://media.giphy.com/media/MDXomrcGshGso/giphy.gif')";
  setTimeout(back5, 5000);
}
function back5(){
  document.getElementById("maindiv").style.backgroundImage = "url('https://media.giphy.com/media/rB2kEXJhDR5mM/giphy.gif')";
  setTimeout(back6, 5000);
}
function back6(){
  document.getElementById("maindiv").style.backgroundImage = "url('https://media.giphy.com/media/rbKtQJTxJQwBW/giphy.gif')";
  setTimeout(end, 5000);
}



function kerekstart(){
  var e = document.getElementById('startbutton');
  e.style.position = "absolute";
  e.style.left = 0+'px';
  e.style.backgroundColor = 'transparent';
  document.getElementById("starttext").innerHTML = "";
  var d = document.getElementById('tocastrate');
  x = Math.floor((Math.random() * 90) + 1);
  y = Math.floor((Math.random() * 90) + 1);
  result++
  document.getElementById("tocastrate").style.backgroundImage = "url('content/kerek.jpg')"; //url('kerek.jpg')
  d.style.position = "absolute";
  d.style.left = x+'%';
  d.style.top = y+'%';
}



function end() {
if (result<35) {
  alert("Your Score : "+result+"\nYou need to score 35 to win !\n\n game will start when u close this popup.");
  lvldone=false;
  result=-1;
  var e = document.getElementById('startbutton');
  e.style.position = "absolute";
  e.style.left = 50+'%';
  startgame();

}else {
  var son = document.getElementById("myAudio");
  son.pause();
  alert("ufag killed hitler");
  var d = document.getElementById('tocastrate');
  document.getElementById("tocastrate").style.backgroundImage = "";
  document.getElementById("tocastrate").style.backgroundColor = "transparent"; //url('kerek.jpg')
  document.getElementById("startbutton").style.width = 500+'px';
  document.getElementById("startbutton").style.height = 500+'px';
  document.getElementById("starttext").innerHTML = "YOU WON";
  f = document.getElementById("starttext");
  f.style.fontSize = 3+'em';
  f.style.color = "gold";
  f.style.textAlign = "center";
  window.open("https://www.youtube.com/watch?v=HL1IFDZToI8");

}
}
