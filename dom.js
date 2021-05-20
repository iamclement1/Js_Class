// Selections
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('h1'));
// single element selectors and Multiple

// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));

// const ul = document.querySelector('.items');

// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';

const btn = document.querySelector('.btn');
btn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('click');
});
