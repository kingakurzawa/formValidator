let buttonAdd = document.querySelector('.addAccount');
let wrapper = document.querySelector('.wrapper');

buttonAdd.addEventListener('click', ()=> {
  buttonAdd.style.display = 'none';
  wrapper.style.display = 'flex'
})