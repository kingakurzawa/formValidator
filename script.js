const buttonAdd = document.querySelector('.addAccount');
const wrapper = document.querySelector('.wrapper');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const confirmPass = document.querySelector('#confirmPass');
const email = document.querySelector('#email');
const emailBox = document.querySelector('.emailBox');
const clearBtn = document.querySelector('.clear');
const sendBtn = document.querySelector('.send');
const succesInfo = document.querySelector('.succesInfo');
const mainBox = document.querySelector('.mainBox');
const succesInfoText = document.querySelector('.succesInfoText-span');

const allInputs = [username, password, confirmPass, email];
const storedUsername = localStorage.getItem('username');
const storedEmail = localStorage.getItem('email');

const checkFormValues = item => {
  item.forEach(el => {
    if (el.value === '') {
      showError(el)
    } else {
      hiddenError(el)
    }
  })
};

const checkLength = (item, minLength) => {
  const setErrorMsg = (text) => {
      item.placeholder = text
  };
  const inputLength = item.value.length;
  if (inputLength < minLength) {
    showError(item);
    setErrorMsg(`should have min.${minLength} lit.`)
  }
};

const checkEmailValue = el => {
  const emailRequirement = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
  if (!emailRequirement.test(el.value)) {
     showError(email)
    }
}

const comparePasswords = ()=> {
  if (password.value !== confirmPass.value) {
    showError(password),
    password.placeholder = 'passwords must be the same'
  }
}

const showSuccesBox = (requirePasswordLength, requireUsernameLength) => {
  const usernameLength = username.value.length
  const passwordLength = password.value.length;

  if ((passwordLength >= requirePasswordLength) 
        && (usernameLength >= requireUsernameLength)
        && (password.value === confirmPass.value)
        && (!emailBox.classList.contains('error'))
  ) 
          {
             succesInfo.style.display = 'flex',
             mainBox.style.display = 'none'
            }
}

const showError = (item) => {
  const formBox = item.parentElement;
  formBox.classList.add('error')
};

const hiddenError = (item) => {
  const formBox = item.parentElement;
  formBox.classList.remove('error')
};

const setSuccesInfoText = ()=> {
  succesInfoText.textContent = username.value
}

const saveToLocalStorage = () => {
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
    el.value = '';
    hiddenError(el);
  });
});

allInputs.forEach(el => {
  el.addEventListener('click', e => {
    e.target.value = ''
  })
})

sendBtn.addEventListener('click', e => {
  e.preventDefault();
  const requirePasswordLength = 6;
  const requireUsernameLength = 3;

  checkFormValues([username,password,confirmPass,email]);
  checkLength(username, requireUsernameLength);
  checkLength(password, requirePasswordLength );
  comparePasswords();
  checkEmailValue(email);
  saveToLocalStorage();
  showSuccesBox(requirePasswordLength, requireUsernameLength);
  setSuccesInfoText();
});

document.addEventListener('change', saveToLocalStorage);