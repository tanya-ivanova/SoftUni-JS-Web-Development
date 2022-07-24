function addItem() {
    let input = document.getElementById('newItemText');
    let liElement = document.createElement('li');
    liElement.textContent = input.value;

    let deleteLink = document.createElement('a');
    deleteLink.textContent = '[Delete]';
    deleteLink.href = '#';
    liElement.appendChild(deleteLink);

    deleteLink.addEventListener('click', onClick);

    function onClick (event) {
        event.target.parentElement.remove();
    }

    document.getElementById('items').appendChild(liElement);
    input.value = ''; 
}