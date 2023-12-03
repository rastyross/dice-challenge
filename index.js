
// var randomNumber1 = Math.floor(Math.random() *6) +1;

// var randomDiceImage = "images/dice" + randomNumber1 + ".png";

// var image1 = document.querySelectorAll("img")[0] ;

// image1.setAttribute("src", randomDiceImage);


// var randomNumber2 = Math.floor(Math.random() *6) +1;

// var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

// var image2 = document.querySelectorAll("img")[1] ;

// image2.setAttribute("src", randomDiceImage2);

var randomNumber1 = Math.floor(Math.random() * 6 ) + 1;
if (randomNumber1 == 1) {
    document.querySelectorAll("img")[0].setAttribute("src" , "images/dice1.png")
} 
else if (randomNumber1 == 2) {
    document.querySelectorAll("img")[0].setAttribute("src" , "images/dice2.png")
}
else if (randomNumber1 == 3) {
    document.querySelectorAll("img")[0].setAttribute("src" , "images/dice3.png")
}
else if (randomNumber1 == 4) {
    document.querySelectorAll("img")[0].setAttribute("src" , "images/dice4.png")
}
else if (randomNumber1 == 5) {
    document.querySelectorAll("img")[0].setAttribute("src" , "images/dice5.png")
}
else if (randomNumber1 == 6) {
    document.querySelectorAll("img")[0].setAttribute("src" , "images/dice6.png")
}

var randomNumber2 = Math.floor(Math.random() * 6 ) + 1;
if (randomNumber2 == 1) {
    document.querySelectorAll("img")[1].setAttribute("src" , "images/dice1.png")
}
else if (randomNumber2 == 2) {
    document.querySelectorAll("img")[1].setAttribute("src" , "images/dice2.png")
}
else if (randomNumber2 == 3) {
    document.querySelectorAll("img")[1].setAttribute("src" , "images/dice3.png")
}
else if (randomNumber2 == 4) {
    document.querySelectorAll("img")[1].setAttribute("src" , "images/dice4.png")
}
else if (randomNumber2 == 5) {
    document.querySelectorAll("img")[1].setAttribute("src" , "images/dice5.png")
}
else if (randomNumber2 == 6) {
    document.querySelectorAll("img")[1].setAttribute("src" , "images/dice6.png")
} 
 

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player1wins";
} else if ( randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player2wins";
}
else if(randomNumber1==randomNumber2 )
{
    document.querySelector("h1").innerHTML = "Its a draw";
}