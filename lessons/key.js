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


const box = document.querySelector('.box');
box.focus();
document.addEventListener('keydown', (event)=>{
    console.log(event.code);
    let key = event.key.toLowerCase();
    if(key === 'arrowup'){
        box.style.background = 'black';
    }
    if(key === 'w'){
        box.style.background = 'pink';
    };
});