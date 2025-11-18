const input = document.querySelector('#controls input')
const btnCreate = document.querySelector('[data-action="render"]')
const btnDelete = document.querySelector('[data-action="destroy"]');
const boxes = document.querySelector('#boxes');

btnCreate.addEventListener('click', ()=>{
    createBoxes(input.value);
})

btnDelete.addEventListener('click', deleteBoxes);