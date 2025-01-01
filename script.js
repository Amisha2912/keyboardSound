const mainBox=document.querySelector('.main-content');
const keys=document.querySelector('#getKey');
const code=document.querySelector('#displayCode');
let audio = document.getElementById("myAudio");
let pressedKeys = '';

window.addEventListener('load',()=>{
    const message=document.createElement('p');
    message.innerHTML='Press the keys in keyboard';
    keys.appendChild(message);
});


document.addEventListener('keydown',(event)=>{
    console.log(event);

    //adding sound
    
    audio.play();

    keys.innerHTML = ''; 
    code.innerHTML = ''; 
    const pressBtn = document.createElement('p'); 
    const display = document.createElement('p'); 
    
    if (event.key === ' ') { 
        pressBtn.innerHTML = `You pressed Space`; 
        display.innerHTML = `The key code is ${event.keyCode}`; 
        keys.appendChild(pressBtn); 
        code.appendChild(display); 
    } 
    
    else if (event.key === 'Control' || event.key === 'Shift' || event.key === 'Alt' || event.key === 'AltGraph') { 
        if (pressedKeys !== '' && !pressedKeys.includes(event.key)) { 
            //Checks if another key is already stored in pressedKeys & Ensures the same modifier key isn’t repeated 
            pressBtn.innerHTML = `You pressed ${event.key} + ${pressedKeys}`; 
            display.innerHTML = `Key codes are ${pressedKeys + event.keyCode}`; 
            keys.appendChild(pressBtn); 
            code.appendChild(display);
            pressedKeys = ''; 
        } 

        //This handles the case where no key combination is detected and Updates pressedKeys with the modifier key . Displays the single modifier key and its code
        else { 
            pressedKeys = event.key; 
            pressBtn.innerHTML = `You pressed ${event.key}`; 
            display.innerHTML = `The key code is ${event.keyCode}`; 
            keys.appendChild(pressBtn); 
            code.appendChild(display);
         
        } 
    } 
    // Handles cases where the pressed key isn’t a modifier
    else { 
        // Checks if a modifier key was already pressed
        if (pressedKeys !== '') { 
            pressBtn.innerHTML = `You pressed ${pressedKeys} + ${event.key}`; 
            display.innerHTML = `Key codes are ${pressedKeys} + ${event.keyCode}`; 
            pressedKeys = ''; 
        } 
        else { 
            pressBtn.innerHTML = `You pressed ${event.key}`; 
            display.innerHTML = `The key code is ${event.keyCode}`; 
        } 
        keys.appendChild(pressBtn); code.appendChild(display); 
    }
});