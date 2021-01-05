const btnSubmit = document.getElementById('email-submit');
const errorMessage = document.getElementById('subsribe-error');
const emailInputField = document.getElementById('email-input');

function validate() {
    let userInput = emailInputField.value;

    var regx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(regx.test(userInput)) {
        alert('You entered a valid email, yaay!');
        return true;
    }
    else {
        errorMessage.classList.add('js-show');
        emailInputField.classList.add('js-border-error');
        return false;
    }
}

btnSubmit.addEventListener('click', validate);
