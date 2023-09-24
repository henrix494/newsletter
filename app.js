const btn = document.querySelector('#btnn');
const email = document.querySelector('#email');
const valid = document.querySelector(`.valid`)
const favDialog = document.getElementById("favDialog");
const closee = document.getElementById(`close`)
const emailP = document.querySelector(`#emailA`)
let emailValue;
let isEmailTrue = null;



email.addEventListener('input', (e) => {
    emailValue = email.value;
});

btn.addEventListener('click', () => {
 
    if (!emailValue || !emailValue.includes('@') || !emailValue.includes('.')) {
        isEmailTrue = false;
        valid.classList.remove(`none`)
    }
    else{
        isEmailTrue = true
        valid.classList.add(`none`)
        favDialog.showModal();
        favDialog.classList.remove(`none`)
        emailP.textContent = emailValue
    }

    if (isEmailTrue === false) {
        email.classList.add('invalid');
    } else {
        email.classList.remove('invalid');
    }
});


closee.addEventListener(`click`,() =>  {
    favDialog.close() ;
    favDialog.classList.add(`none`);}

)
