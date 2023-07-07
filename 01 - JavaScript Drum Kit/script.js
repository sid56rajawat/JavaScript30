console.log("Hello from script.js");

function playDrums(eventObject){
    let pressedKey = eventObject.key;
    
    audio = document.querySelector(`audio[data-key="${pressedKey}"]`);
    // console.log(audio);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();

    let key = document.querySelector(`.key[data-key="${pressedKey}"]`);
    if(!key) return;
    key.classList.add("playing");
    // setTimeout(() => key.classList.toggle("playing"),100);
}

// my method
function stopPlaying(eventObject){
    let releasedKey = eventObject.key;
    let key = document.querySelector(`.key[data-key="${releasedKey}"]`);
    if(!key) return;
    key.classList.remove("playing");
}

// his highness' solution
function removeTransition(eventObject){
    if(eventObject.propertyName !== "transform") return;
    this.classList.remove("playing");
}

window.addEventListener('keydown',playDrums);
// window.addEventListener('keyup',stopPlaying);

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener('transitionend',removeTransition));