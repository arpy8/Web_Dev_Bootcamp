var dice1 = Math.floor(Math.random() * 6) + 1;
var dice2 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img1").setAttribute("src", `images/dice${dice1}.png`);
document.querySelector(".img2").setAttribute("src", `images/dice${dice2}.png`);

document.querySelector("h1").textContent = "Player " + (dice1 > dice2 ? "1" : "2") + " Wins!";