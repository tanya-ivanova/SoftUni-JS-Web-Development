function validate() {
    let reg = /[a-z]+@[a-z]+\.[a-z]+/;
    let inputElement = document.getElementById('email');    

    inputElement.addEventListener('change',checkEmail);

    function checkEmail(event) {
        if(reg.test(event.target.value)){
            event.target.classList.remove('error');
            return;
        }

        event.target.classList.add('error');
    }
 }