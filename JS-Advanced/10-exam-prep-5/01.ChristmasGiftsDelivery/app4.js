function solution() {
    let inputElement = document.querySelector('input');

    let sections = Array.from(document.querySelectorAll('section'));
    let listOfGiftsUl = sections[1].querySelector('ul');
    let sentGiftsUl = sections[2].querySelector('ul');
    let discardedGiftsUl = sections[3].querySelector('ul');

    let buttonAdd = document.querySelector('button');
    buttonAdd.addEventListener('click', onAdd);

    let gifts = [];
    
    function onAdd(event) {
        Array.from(listOfGiftsUl.children).forEach(g => g.remove());

        gifts.push(inputElement.value);
        inputElement.value = '';

        gifts.sort(((a, b) => a.localeCompare(b)));
        
        gifts.forEach(g => {
            let liElement = document.createElement('li');
            liElement.textContent = g;
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

            buttonSend.addEventListener('click', manageGift);
            buttonDiscard.addEventListener('click', manageGift);

            function manageGift(event) {            
                buttonSend.remove();
                buttonDiscard.remove();

                if(event.target.textContent === 'Send') {
                    sentGiftsUl.appendChild(liElement);
                } else if(event.target.textContent === 'Discard') {
                    discardedGiftsUl.appendChild(liElement);
                }                

                let giftToRemove = liElement.textContent;
                let index = gifts.indexOf(giftToRemove);
                gifts.splice(index, 1);
            }            
        });                    
    }
}