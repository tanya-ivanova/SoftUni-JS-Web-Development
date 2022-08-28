function solve() {
    let recipientElement = document.getElementById('recipientName');
    let titleElement = document.getElementById('title');
    let messageElement = document.getElementById('message');

    let buttonAdd = document.getElementById('add');
    let buttonReset = document.getElementById('reset');

    let listOfMailsUlElement = document.getElementById('list');
    let listOfSentMailsUlElement = document.querySelector('ul.sent-list');
    let deletedMailsUlElement = document.querySelector('ul.delete-list');

    buttonAdd.addEventListener('click', onAdd);
    buttonReset.addEventListener('click', clearInputs);

    function onAdd(event) {
        event.preventDefault();

        if(recipientElement.value === '' || titleElement.value === '' || messageElement.value === '') {
            return;
        }

        let liElement = document.createElement('li');

        let h4TitleElement = document.createElement('h4');
        h4TitleElement.textContent = `Title: ${titleElement.value}`;

        let h4RecipientElement = document.createElement('h4');
        h4RecipientElement.textContent = `Recipient Name: ${recipientElement.value}`;

        let spanElement = document.createElement('span');
        spanElement.textContent = messageElement.value;

        let divElement = document.createElement('div');
        divElement.setAttribute('id', 'list-action');

        let buttonSend = document.createElement('button');
        buttonSend.textContent = 'Send';
        buttonSend.setAttribute('type', 'submit');
        buttonSend.setAttribute('id', 'send');
        divElement.appendChild(buttonSend);

        let buttonDelete = document.createElement('button');
        buttonDelete.textContent = 'Delete';
        buttonDelete.setAttribute('type', 'submit');
        buttonDelete.setAttribute('id', 'delete');
        divElement.appendChild(buttonDelete);

        let recipient = recipientElement.value;
        let title = titleElement.value;

        clearInputs();

        liElement.appendChild(h4TitleElement);
        liElement.appendChild(h4RecipientElement);
        liElement.appendChild(spanElement);
        liElement.appendChild(divElement);

        listOfMailsUlElement.appendChild(liElement);

        buttonSend.addEventListener('click', onSend);
        buttonDelete.addEventListener('click', onDeleteListedMails);

        function onSend(event) {  
            liElement.remove();      

            let liSentMails = document.createElement('li');
    
            let spanRecipient = document.createElement('span');
            spanRecipient.textContent = `To: ${recipient}`;
    
            let spanTitle = document.createElement('span');
            spanTitle.textContent = `Title: ${title}`;
    
            let divForDeleteBtn = document.createElement('div');
            divForDeleteBtn.classList.add('btn');
    
            let buttonDeleteInSentMails = document.createElement('button');
            buttonDeleteInSentMails.textContent = 'Delete';
            buttonDeleteInSentMails.setAttribute('type', 'submit');
            buttonDeleteInSentMails.classList.add('delete');
            divForDeleteBtn.appendChild(buttonDeleteInSentMails);
    
            liSentMails.appendChild(spanRecipient);
            liSentMails.appendChild(spanTitle);
            liSentMails.appendChild(divForDeleteBtn);
    
            listOfSentMailsUlElement.appendChild(liSentMails);

            buttonDeleteInSentMails.addEventListener('click', onDeleteInSentMails);

            function onDeleteInSentMails(event) {
                liSentMails.remove();
                
                createDeletedMailRecord();
            }
        }

        function onDeleteListedMails(event) {
            liElement.remove();

            createDeletedMailRecord();
        }

        function createDeletedMailRecord() {
            let liDeletedMails = document.createElement('li');

            let spanRecipient = document.createElement('span');
            spanRecipient.textContent = `To: ${recipient}`;

            let spanTitle = document.createElement('span');
            spanTitle.textContent = `Title: ${title}`;

            liDeletedMails.appendChild(spanRecipient);
            liDeletedMails.appendChild(spanTitle);

            deletedMailsUlElement.appendChild(liDeletedMails);
        }
    }

    function clearInputs() {
        recipientElement.value = '';
        titleElement.value = '';
        messageElement.value = '';
    }    
}

solve();
