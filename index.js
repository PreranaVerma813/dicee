var randomnumber1 = Math.floor(Math.random() * 6) + 1; // 1-6 no.genertor

var randomdiceimage = "dice" + randomnumber1 + ".png"; //select random image by concactination of dice1-6.img

var randomimgsrc = "images/" + randomdiceimage; // to select src of images;images/dice1-6.png;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomimgsrc);


var randomenumber2 = Math.floor(Math.random() * 6) + 1;

var randomimagesrc = "images/dice" + randomenumber2 + ".png";

//var image2 = document.querySelectorAll("img")[1];
//image2.setAttribute("src", randomimgsrc2);

document.querySelectorAll("img")[1].setAttribute("src", randomimagesrc);


if(randomnumber1 > randomenumber2){
  document.querySelector("h1").innerHTML="🏆 Player 1 wins!";
}
else if (randomenumber2 > randomnumber1) {
  document.querySelector("h1").innerHTML="Player 2 Wins!🏆";
}
else{
  document.querySelector("h1").innerHTML="Draw!!!";
}
