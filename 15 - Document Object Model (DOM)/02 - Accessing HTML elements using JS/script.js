document.querySelector("li a").innerHTML = "Poogle"; // changing google to poogle

document.querySelector("h1").style.color = "red"; // changes color from red to blue
document.querySelector("h1").style.fontSize = "2rem"; // changes color from red to blue

document.querySelector("h1").classList.add("temp"); // adds temp class to h1
document.querySelector("h1").classList.remove("temp"); // removes temp class from h1

document.querySelector("a").attributes; // returns all the attributes related to h1

document.querySelector("a").getAttribute("href"); // returns text inside the href attribute
document.querySelector("a").setAttribute("href", "https://www.youtube.com/"); // alters the text inside the href attribute