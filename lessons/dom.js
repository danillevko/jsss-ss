// let b = document.querySelector('.a');
// b.textContent = 'abc';
// b.style.color = 'red';
// b.classList.add('text');

// let list = document.querySelector('.site-nav');
// list.style.background = 'yellow';
// let li = document.querySelector('a[href = "https://"]');
// li.classList.add('link');

// let a = document.querySelectorAll('ul a[href^="http://"]');
// a.forEach(elements => {elements.style.color = 'orange'});
// let links = document.querySelectorAll('li a');
// links[0].classList.add('size');
// links[5].classList.add('size');
// let header = document.querySelector('h1');
// header.textContent = 'Hello World';
// header.classList.add('header');
// header.classList.replace('header', 'newHeader');
// console.log(links.classList.contains('list'));

// let a = document.createElement('span');
// console.log(a);
// a.textContent = 'abc'
// let c = document.createElement('span');
// console.log(c);
// a.textContent = 'def'
// let b = document.querySelector('.ul');
// b.append(a);
// b.prepend(a);
// b.after(a);

// let a = document.querySelector('.ul');
// b.innertAdjacentHTML('beforeBegin', '<li>blablabla</li>');


// let b = document.createElement('h1');
// b.textContent = 'Привіт, це перший мій створений елемент!';
// b.classList.add('title');
// document.body.append(b);

// let b = document.createElement('img');
// b.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE7SdyvIASBkBBDEY6oShdzUjTkHz2mMDxOg&s';
// b.alt = 'smile face';
// let c = document.createElement('button');
// c.type = 'submit';
// a.append(b);
// a.prepend(c);

let a = document.querySelector('.site-nav__item');
let b = document.createElement('a');
a.append(b);
b.href = 'https://edu.goiteens.com/learn/23446937/15266038/15266628/training?blockId=17671950';
b.textContent = 'helo my neighbor';

