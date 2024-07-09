let pianoContainer = document.getElementsByClassName("piano-container");
const base = "./audio/";

window.onload = () => {
    let keysPressed = new Set(); 
    for (let index = 1; index <= 24; index++) {
        let div = document.createElement("div");
        div.classList.add("key", index <= 10 ? "black-key" : "white-key");
        
        const number = index <= 9 ? "0" + index : index;
        
      
        div.addEventListener("mousedown", () => {
            keysPressed.add(number);
            playChord(keysPressed);
        });

        div.addEventListener("mouseup", () => {
            keysPressed.delete(number);
            stopChord();
        });

        div.addEventListener("mouseleave", () => {
            keysPressed.delete(number);
            stopChord();
        });

        pianoContainer[0].appendChild(div);
    }

 
    function playChord(keys) {
        keys.forEach(key => {
            new Audio(`${base}key${key}.mp3`).play();
        });
    }

    
    function stopChord() {
        
        let sounds = document.getElementsByTagName('audio');
        for(let i = 0; i < sounds.length; i++) {
            sounds[i].pause();
            sounds[i].currentTime = 0;
        }
    }
};
