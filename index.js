const cat = document.getElementById('cat');
const stopSounds = document.getElementById('stop-sound');
const catSound = new Audio(`./sounds/cat.mp3`);


const animalSounds = document.getElementsByClassName('play-sound')
let current = '';

for (const animal of animalSounds) {
    animal.addEventListener("click", playSound)
}

function playSound(e) {
    const id = e.target.id;
    console.log('id: ', id)
    const player = new Audio(`./sounds/${id}.mp3`);
    if(current == '') {
        current = player;
    }
    current.pause();
    current = player;
    current.play();
    document.getElementById(id).classList.add("spinup");
}

stopSounds.addEventListener('click', () => {
    console.log('Stop sounds')
    if(current !== '') {
        current.pause();
    }
})
