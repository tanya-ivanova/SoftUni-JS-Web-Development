function validate() {
    let username = document.getElementById('username');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let confirmPassword = document.getElementById('confirm-password');
    let company = document.getElementById('company');
    let companyNumber = document.getElementById('companyNumber');
    let companyInfo = document.getElementById('companyInfo');
    let submitButton = document.getElementById('submit');
    let divValid = document.getElementById('valid');

    let patternUsername = /^[A-Za-z0-9]{3,20}$/;
    let patternPassword = /^\w{5,15}$/;
    let patternEmail = /^[^@.]+@[^@]*\.[^@]*$/;    

    company.addEventListener('change', onChangeCheckbox);
    
    submitButton.addEventListener('click', onClick);

    function onChangeCheckbox(event) {
        if(company.checked) {
            companyInfo.style.display = 'block';
        } else {
            companyInfo.style.display = 'none';
        }
    }    

    function onClick(event) {
        event.preventDefault();
        let isValid = true;

        if(!patternUsername.test(username.value)) {
            username.style.borderColor = 'red';
            isValid = false;                        
        } else {
            username.style.border = 'none';
        }

        if(!patternEmail.test(email.value)) {
            email.style.borderColor = 'red';
            isValid = false;            
        } else {
            email.style.border = 'none';
        }

        let passFirst = password.value;
        let passSecond = confirmPassword.value;

        if(!patternPassword.test(password.value) || passFirst !== passSecond) {
            password.style.borderColor = 'red';
            isValid = false;            
        } else {
            password.style.border = 'none';
        }

        if(!patternPassword.test(confirmPassword.value) || passFirst !== passSecond) {
            confirmPassword.style.borderColor = 'red';
            isValid = false;            
        } else {
            confirmPassword.style.border = 'none';
        }                    

        if(company.checked) {
            if(Number(companyNumber.value) < 1000 || Number(companyNumber.value) > 9999) {
                companyNumber.style.borderColor = 'red';
                isValid = false;                
            } else {
                companyNumber.style.border = 'none';
            }
        }

        if(isValid) {
            divValid.style.display = 'block';            
        } else {
            divValid.style.display = 'none';
        }
    }
}
