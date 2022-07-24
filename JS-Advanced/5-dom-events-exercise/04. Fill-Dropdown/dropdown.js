function addItem() {
    let text = document.getElementById('newItemText');
    let value = document.getElementById('newItemValue');

    let optionElement = document.createElement('option');
    optionElement.textContent =  text.value;
    optionElement.value = value.value;
    
    let selectElement = document.getElementById('menu');
    
    if(text.value !== '' && value.value !== '') {
        selectElement.appendChild(optionElement);
    }

    text.value = '';
    value.value = '';
}