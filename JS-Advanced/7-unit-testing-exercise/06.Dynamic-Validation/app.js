function validate() {
    let pattern = /^[a-z]+@[a-z]+.[a-z]+$/;
    let input = document.getElementById('email');

    input.addEventListener('change', onChange);

    function onChange(event) {        
        if(!pattern.test(input.value)) {
            input.className = 'error';
        } else {
            input.className = '';
        }
    }
}