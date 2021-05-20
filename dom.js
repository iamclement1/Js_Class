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

// const btn = document.querySelector('.btn');
// btn.addEventListener('click', (e) => {
//   e.preventDefault();
//   console.log('click');
// });

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  //   console.log(nameInput.value);

  if (nameInput.value === '' || emailInput === '') {
    msg.classList.add('error');
    msg.innerHTML = 'Please enter fields';

    // to make the error disapper
    setTimeout(() => msg.remove(), 3000);
  } else {
    // console.log('success');

    const li = document.createElement('li');
    li.appendChild(
      document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
    );

    userList.appendChild(li);

    //clear fields:
   nameInput.value = '';
   emailInput.value = '';
  }
}
