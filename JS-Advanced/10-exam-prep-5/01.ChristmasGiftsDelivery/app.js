function solution() {
    let inputElement = document.querySelector('input');

    let sections = Array.from(document.querySelectorAll('section'));
    let listOfGiftsUl = sections[1].querySelector('ul');
    let sentGiftsUl = sections[2].querySelector('ul');
    let discardedGiftsUl = sections[3].querySelector('ul');

    let buttonAdd = document.querySelector('button');
    buttonAdd.addEventListener('click', onAdd);
    
    function onAdd(event) {
        let liElement = document.createElement('li');
        liElement.textContent = inputElement.value;
        liElement.classList.add('gift');       

        let buttonSend = document.createElement('button');
        buttonSend.textContent = 'Send';
        buttonSend.setAttribute('id', 'sendButton');
        liElement.appendChild(buttonSend);
                
        let buttonDiscard = document.createElement('button');
        buttonDiscard.textContent = 'Discard';
        buttonDiscard.setAttribute('id', 'discardButton');
        liElement.appendChild(buttonDiscard);

        listOfGiftsUl.appendChild(liElement);

        inputElement.value = '';

        let allLiElements = Array.from(listOfGiftsUl.querySelectorAll('li'));
        let sortedLiElements = allLiElements.sort((a, b) => a.textContent.localeCompare(b.textContent));

        //Array.from(listOfGiftsUl.children).forEach(g => g.remove());
        // while (listOfGiftsUl.firstChild) {
        //     listOfGiftsUl.firstChild.remove();
        // }

        for (const element of sortedLiElements) {
            listOfGiftsUl.appendChild(element);
        }

        buttonSend.addEventListener('click', onSend);
        buttonDiscard.addEventListener('click', onDiscard);

        function onSend(event) {            
            buttonSend.remove();
            buttonDiscard.remove();
            sentGiftsUl.appendChild(liElement);
        }

        function onDiscard(event) {                
            buttonSend.remove();
            buttonDiscard.remove();
            discardedGiftsUl.appendChild(liElement);
        }      
    }
}