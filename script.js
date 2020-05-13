let buttonAdd = document.querySelector('.addAccount');
let wrapper = document.querySelector('.wrapper');
let username = document.querySelector('#username');
let password = document.querySelector('#password');
let confirmPass = document.querySelector('#confirmPass');
let email = document.querySelector('#email');
let clearBtn = document.querySelector('.clear');
let sendBtn = document.querySelector('.send');
let succesInfo = document.querySelector('.succesInfo');

let showError = (item) => {
  let formBox = item.parentElement;
  formBox.classList.add('error')
}
let hiddenError = (item) => {
  let formBox = item.parentElement;
  formBox.classList.remove('error')
}

let checkFormValues = item => {
  item.forEach(el => {
    if (el.value === '') {
      showError(el)
    } else {
      hiddenError(el)
    }
  })
}

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

sendBtn.addEventListener('click', e => {
  e.preventDefault();
  checkFormValues([username,password,confirmPass,email]);
})