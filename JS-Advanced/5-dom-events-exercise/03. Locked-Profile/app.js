function lockedProfile() {
    let buttons = Array.from(document.querySelectorAll('button'))
    .forEach(b => b.addEventListener('click', onClick));

    function onClick (event) {
        let divToDisplay = event.target.previousElementSibling;

        let parent = event.target.parentElement;
        
        let inputUnlocked = Array.from(parent.children)[4];
        
        if(event.target.textContent === 'Show more') {
            if(inputUnlocked.checked) {
                divToDisplay.style.display = 'block';
                event.target.textContent = 'Hide it';
            }
        } else if (event.target.textContent === 'Hide it') {
            if(inputUnlocked.checked) {
                divToDisplay.style.display = 'none';
                event.target.textContent = 'Show more';
            }
        }        
    }
}