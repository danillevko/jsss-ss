// const text = document.querySelector('.text');
// const del = document.querySelector('.delete');
// const p = document.querySelector('.output');
// del.addEventListener('click', ()=>{
//     text.value = '';
//     p.textContent = '';
// });
// text.addEventListener('keydown', ()=>{
//     p.textContent = text.value;
// });


// const box = document.querySelector('.box');
// box.focus();
// document.addEventListener('keydown', (event)=>{
//     console.log(event.code);
//     let key = event.key.toLowerCase();
//     if(key === 'arrowup'){
//         box.style.background = 'black';
//     }
//     if(key === 'w'){
//         box.style.background = 'pink';
//     };
// });

// const block = document.querySelector('.block');
// document.addEventListener('mousemove', (event)=>{
//     console.log(event.code);
//     let r = block.getBoundingClientRect();
//     let cX = window.innerWidth / 2;
//     let cY = window.innerHeight / 2;
//     let dX = event.clientX - cX;
//     let dY = event.clientY - cY;
//     block.style.transform = `translate(-50%, -50%) translate(${dX}px, ${dY}px)`;
// });

const info = document.querySelector('.info');
const currentKey = document.querySelector('.current-key');
const newGame = document.querySelector('.new-game');
const keys = [`q`, `w`, `e`, `r`, `t`, `y`, `u`, `i`, `o`, `p`];
let currentKeyIndex = 0;
function updateKey(){
    info.textContent = keys[currentKeyIndex];
};
function startGame(){
    currentKeyIndex = Math.floor(Math.random() * keys.length);
    updateKey();
}
document.addEventListener('keydown', (event)=>{
    let pressedKey = event.key.toLowerCase();
    if(pressedKey === keys[currentKeyIndex]){
        currentKey.textContent = 'Well done';
        currentKeyIndex = Math.floor(Math.random() * keys.length);
        updateKey();
    } else{
        currentKey.textContent = 'Wrong';
    }
})
newGame.addEventListener('click', ()=>{
    startGame();
})