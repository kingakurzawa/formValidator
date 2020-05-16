let buttonAdd = document.querySelector('.addAccount');
let wrapper = document.querySelector('.wrapper');
let username = document.querySelector('#username');
let password = document.querySelector('#password');
let confirmPass = document.querySelector('#confirmPass');
let email = document.querySelector('#email');
let clearBtn = document.querySelector('.clear');
let sendBtn = document.querySelector('.send');
let succesInfo = document.querySelector('.succesInfo');
let mainBox = document.querySelector('.mainBox');
let succesInfoText = document.querySelector('.succesInfoText-span');

let allInputs = [username, password, confirmPass, email];
let storedUsername = localStorage.getItem('username');
let storedEmail = localStorage.getItem('email');

let checkFormValues = item => {
  item.forEach(el => {
    if (el.value === '') {
      showError(el)
    } else {
      hiddenError(el)
    }
  })
};

let checkLength = (item, minLength) => {
  let setErrorMsg = (text) => {
      item.placeholder = text
  };
  let inputLength = item.value.length;
  if (inputLength < minLength) {
    showError(item);
    setErrorMsg(`should have min.${minLength} lit.`)
  }
};

let comparePasswords = ()=> {
  if (password.value !== confirmPass.value) {
    showError(password),
    password.placeholder = 'passwords must be the same'
  }
}

let showSuccesBox = () => {
  let usernameLength = username.value.length
  let passwordLength = password.value.length;
  if ((passwordLength >= 6) && (usernameLength >=3) && (password.value === confirmPass.value)) {
      succesInfo.style.display = 'flex',
      mainBox.style.display = 'none'
  }
}

let showError = (item) => {
  let formBox = item.parentElement;
  formBox.classList.add('error')
};

let hiddenError = (item) => {
  let formBox = item.parentElement;
  formBox.classList.remove('error')
};

let setSuccesInfoText = ()=> {
  succesInfoText.textContent = username.value
}

let saveToLocalStorage = () => {
  localStorage.setItem('username', username.value)
  localStorage.setItem('email', email.value)  
}

if (username) {
  username.value = storedUsername
}
if (email) {
  email.value = storedEmail
};

buttonAdd.addEventListener('click', e => {
  e.preventDefault();
  buttonAdd.style.display = 'none';
  wrapper.style.display = 'flex'
});

clearBtn.addEventListener('click', e => {
  e.preventDefault();
  [username,password,confirmPass,email].forEach(el => {
    el.value = ''
  });
});

allInputs.forEach(el => {
  el.addEventListener('click', e => {
    e.target.value = ''
  })
})

sendBtn.addEventListener('click', e => {
  e.preventDefault();
  checkFormValues([username,password,confirmPass,email]);
  checkLength(username, 3);
  checkLength(password, 6);
  comparePasswords();
  saveToLocalStorage();
  showSuccesBox();
  setSuccesInfoText();
});

document.addEventListener('change', saveToLocalStorage);
