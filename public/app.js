function showModal(message) {
  const modal = document.getElementById('modal');
  const modalMessage = document.getElementById('modal-message');
  modal.style.display = 'block'; 
  modalMessage.textContent = message; 
}

submit.addEventListener('click', function(event) {
  event.preventDefault(); 
  loading(); 
  setTimeout(function() {
    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;
    if (login === 'admin@gmail.com' && password === 'admin123') {
      showModal('Welcome back! You have successfully logged in to your account!');
    } else {
      showModal('Oops! Your username or password was incorrect. Please try again.');
    }
  }, 2000); 
});

function loading() {
  const submitBtn = document.getElementById("submit");
  submit.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...'; 
  submitBtn.disabled = true;
  setTimeout(() => {
    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;
    const modal = document.getElementById('modal');

 
    if (login === 'admin@gmail.com' && password === 'admin') {
      modal.style.display = "block";
    } else {
      modal.style.display = "block";
    }
    submitBtn.disabled = false;
    submit.innerHTML = 'Log in'; 
  }, 2000);
}

const closeBtn = document.getElementById('modal-close');
closeBtn.addEventListener('click', function() {
  const modal = document.getElementById('modal');
  const login = document.getElementById('login');
  const password = document.getElementById('password');

  modal.style.display = 'none';

  login.value = '';
  password.value = '';
  
  emailLabel.classList.remove('active')
  passwordLabel.classList.remove('active');

});

const emailInput = document.getElementById('login');
const passwordInput = document.getElementById('password');
const emailLabel = document.querySelector('label[for="login"]');
const passwordLabel = document.querySelector('label[for="password"]');

emailInput.addEventListener('input', () => {
  if (emailInput.value) {
    emailLabel.classList.add('active');
  } else {
    emailLabel.classList.remove('active');
  }
});

passwordInput.addEventListener('input', () => {
  if (passwordInput.value) {
    passwordLabel.classList.add('active');
  } else {
    passwordLabel.classList.remove('active');
  }
});
