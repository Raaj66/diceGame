// DICE 1

var r1 = Math.floor(Math.random() * 6) +1;

var dice = "dice" +r1+ ".png";

var image = "images/" +  dice;

var selectimage = document.querySelectorAll("img")[0]; 

selectimage.setAttribute("src", image);


// DICE 2

var r2 = Math.floor(Math.random() * 6) +1;

var dice2 = "images/dice" +r2+ ".png";

var selectimage = document.querySelectorAll("img")[1].setAttribute("src", dice2);

if(r1 > r2){
	document.querySelector("h1").innerHTML = "Player 1 wins"
}
else if(r1 < r2){
	document.querySelector("h1").innerHTML = "Player 2 wins"
}
else{
	document.querySelector("h1").innerHTML = "Draw";
}