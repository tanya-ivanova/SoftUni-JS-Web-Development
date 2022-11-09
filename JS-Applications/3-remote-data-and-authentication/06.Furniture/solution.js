//const {loadAllFurniture} = require('./homeLogged');

const tBody = document.querySelector('tbody');

window.addEventListener('load', loadAllFurniture);

async function loadAllFurniture() {  
    
    tBody.replaceChildren();

    try {
        const response = await fetch('http://localhost:3030/data/furniture');
        if(response.ok === false) {
            const error = await response.json();
            throw new Error(error.message);
        }

        const data = await response.json();
        data.forEach(f => {
            const trElement = document.createElement('tr');
            const tdImg = document.createElement('td');
            const img = document.createElement('img');
            img.src = f.img;
            tdImg.appendChild(img);
            trElement.appendChild(tdImg);
            createTdWithPElement(f.name, trElement);
            createTdWithPElement(f.price, trElement);
            createTdWithPElement(f.factor, trElement);
            const tdInput = document.createElement('td');
            const input = document.createElement('input');
            input.setAttribute('type', 'checkbox');
            tdInput.appendChild(input);
            trElement.appendChild(tdInput);
            tBody.appendChild(trElement);
        });

    } catch (error) {
        alert(error.message);
    }
}

function createTdWithPElement(content, parent) {
    const tdElement = document.createElement('td');
    const pElement = document.createElement('p');
    pElement.textContent = content;
    tdElement.appendChild(pElement);
    parent.appendChild(tdElement);
}