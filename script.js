const mainBox=document.querySelector('.main-content');
const keys=document.querySelector('#getKey');
const code=document.querySelector('#displayCode');
let pressedKeys = '';

window.addEventListener('load',()=>{
    const message=document.createElement('p');
    message.innerHTML='Press the keys in keyboard';
    keys.appendChild(message);
});


document.addEventListener('keydown',(event)=>{
    console.log(event);

    //adding sound
    let audio = document.getElementById("myAudio");
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
            pressBtn.innerHTML = `You pressed ${event.key} + ${pressedKeys}`; 
            display.innerHTML = `Key codes are ${pressedKeys + event.keyCode}`; 
            keys.appendChild(pressBtn); 
            code.appendChild(display);
            pressedKeys = ''; 
        } 
        else { 
            pressedKeys = event.key; pressBtn.innerHTML = `You pressed ${event.key}`; display.innerHTML = `The key code is ${event.keyCode}`; 
            keys.appendChild(pressBtn); 
            code.appendChild(display);
         
        } 
    } 
    else { 
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