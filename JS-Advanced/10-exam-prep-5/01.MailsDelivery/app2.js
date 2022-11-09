function solve() {
    const recipientElement = document.getElementById('recipientName');
const titleElement = document.getElementById('title');
const messageElement = document.getElementById('message');
const addBtn = document.getElementById('add');
const resetBtn = document.getElementById('reset');
const ulListEmails = document.getElementById('list');
const ulSentEmails = document.querySelector('ul.sent-list');
const ulDeletedEmails = document.querySelector('ul.delete-list');

addBtn.addEventListener('click', onAdd);
resetBtn.addEventListener('click', onReset);

function onAdd(event) {
    event.preventDefault();

    if(recipientElement.value === '' || titleElement.value === '' || messageElement.value === '') {
        return;
    }

    const liElement = document.createElement('li');
    const h4Title = document.createElement('h4');
    h4Title.textContent = `Title: ${titleElement.value}`;
    const h4Recipient = document.createElement('h4');
    h4Recipient.textContent = `Recipient Name: ${recipientElement.value}`;
    const spanMessage = document.createElement('span');
    spanMessage.textContent = messageElement.value;
    const divButtons = document.createElement('div');
    divButtons.classList.add('list-action');
    const sendBtn = document.createElement('button');
    sendBtn.setAttribute('id', 'send');
    sendBtn.setAttribute('type', 'submit');
    sendBtn.textContent = 'Send';
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('id','delete');
    deleteBtn.setAttribute('type', 'submit');
    deleteBtn.textContent = 'Delete';
    divButtons.appendChild(sendBtn);
    divButtons.appendChild(deleteBtn);
    liElement.appendChild(h4Title);
    liElement.appendChild(h4Recipient);
    liElement.appendChild(spanMessage);
    liElement.appendChild(divButtons);
    ulListEmails.appendChild(liElement);

    recipientElement.value = '';
    titleElement.value = '';
    messageElement.value = '';

    sendBtn.addEventListener('click', onSend);
    deleteBtn.addEventListener('click', onDeleteListedEmail);

    function onSend(event) {
        event.preventDefault();

        liElement.remove();

        const liSentEmail = document.createElement('li');
        const spanRecipient = document.createElement('span');
        spanRecipient.textContent = `To: ${h4Recipient.textContent.substring(16)}`;
        const spanTitle = document.createElement('span');
        spanTitle.textContent = h4Title.textContent;
        const div = document.createElement('div');
        div.classList.add('btn');
        const deleteSentEmailBtn = document.createElement('button');
        deleteSentEmailBtn.classList.add('delete');
        deleteSentEmailBtn.setAttribute('type', 'submit');
        deleteSentEmailBtn.textContent = 'Delete';
        div.appendChild(deleteSentEmailBtn);
        liSentEmail.appendChild(spanRecipient);
        liSentEmail.appendChild(spanTitle);
        liSentEmail.appendChild(div);
        ulSentEmails.appendChild(liSentEmail);

        deleteSentEmailBtn.addEventListener('click', onDeleteSentEmail);

        function onDeleteSentEmail(event) {
            event.preventDefault();
            div.remove();
            ulDeletedEmails.appendChild(liSentEmail);
        }
    }

    function onDeleteListedEmail(event) {
        event.preventDefault();

        liElement.remove();

        const liDeletedEmail = document.createElement('li');
        const spanRecipient = document.createElement('span');
        spanRecipient.textContent = `To: ${h4Recipient.textContent.substring(16)}`;
        const spanTitle = document.createElement('span');
        spanTitle.textContent = h4Title.textContent;
        liDeletedEmail.appendChild(spanRecipient);
        liDeletedEmail.appendChild(spanTitle);
        ulDeletedEmails.appendChild(liDeletedEmail);
    }

}

function onReset(event) {
    event.preventDefault();

    recipientElement.value = '';
    titleElement.value = '';
    messageElement.value = '';
}
}

solve();