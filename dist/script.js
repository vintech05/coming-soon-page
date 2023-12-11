const form = document.querySelector('form');
const email = document.querySelector('input[name="email"]');
const error =  document.querySelector('.error');


form.addEventListener('submit', (e) => {
    if (email.value === undefined || email.value === '') {
        error.style.display = 'block';
        email.style.borderColor = 'red';
        error.textContent = 'Please provide an email address';
        e.preventDefault();
    } else {
        email.input.value == '';
        email.style.borderColor = 'green';
        error.style.display = 'none';
    }
    
})
