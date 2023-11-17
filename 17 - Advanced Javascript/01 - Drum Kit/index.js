function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.addEventListener("click", handleClick);
document.addEventListener("keydown", handleKeyPress);



function handleClick(event) {
    if (event.target.classList.contains("drum"))
    {
        var audioFile = event.target.classList[0];
        var audio = new Audio(`sounds/${audioFile}.mp3`)
        audio.play();
        flashButton();
    }
}

function handleKeyPress(event) {
    var audioFile = event.key;
    var audio = new Audio(`sounds/${audioFile}.mp3`)
    audio.play();
    flashButton(audioFile);
}

async function flashButton(currentKey) {
    var activeButton = document.querySelector(`.${currentKey}`);
    activeButton.style.opacity = 0.5;
    await sleep(100);
    activeButton.style.opacity = 1;
}