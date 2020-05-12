let buttonAdd = document.querySelector('.addAccount');
let wrapper = document.querySelector('.wrapper');
let username = document.querySelector('#username');
let password = document.querySelector('#password');
let confirmPass = document.querySelector('#confirmPass');
let email = document.querySelector('#email');
let error = document.querySelector('.error');
let clearBtn = document.querySelector('.clear');
let sendBtn = document.querySelector('.send');
let succesInfo = document.querySelector('.succesInfo');

buttonAdd.addEventListener('click', e => {
  e.preventDefault();
  buttonAdd.style.display = 'none';
  wrapper.style.display = 'flex'
})

clearBtn.addEventListener('click', e => {
  e.preventDefault();

  [username,password,confirmPass,email].forEach(el => {
    el.value = ''
  })
})