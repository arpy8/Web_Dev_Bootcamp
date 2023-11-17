var myButton = document.getElementById('myButton');
var count = 0;

myButton.addEventListener('click', function() {
    if (count % 2 == 0)
        document.querySelector("h1").style.color = "blue";
    else
        document.querySelector("h1").style.color = "red";
    count++;
});