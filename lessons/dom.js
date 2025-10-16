// let b = document.querySelector('.a');
// b.textContent = 'abc';
// b.style.color = 'red';
// b.classList.add('text');

// let list = document.querySelector('.site-nav');
// list.style.background = 'yellow';
// let li = document.querySelector('a[href = "https://"]');
// li.classList.add('link');

let a = document.querySelectorAll('ul a[href^="http://"]');
a.forEach(elements => {elements.style.color = 'orange'});
let links = document.querySelectorAll('li a');
links[0].classList.add('size');
links[5].classList.add('size');
let header = document.querySelector('h1');
header.textContent = 'Hello World';
header.classList.add('header');
header.classList.replace('header', 'newHeader');
console.log(links.classList.contains('list'));
