const errorMessage = document.querySelector('.error');
const emailInput = document.querySelector('#email');
const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // clear error message
  clearErrorMessage();

  if (emailInput.value === '' || !validateEmail(emailInput.value)) {
    errorMessage.innerText = 'valid email required';
    emailInput.style.backgroundColor = '#efbfbf';
    emailInput.classList.add('error');
    return;
  }

  location.href = '../../newsletter_signup/success.html';
});

/* FUNCTIONS*/
const validateEmail = (email) => {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
};

const clearErrorMessage = () => {
  errorMessage.innerText = '';
  emailInput.style.backgroundColor = 'white';
  emailInput.classList.remove('error');
};
