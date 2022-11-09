const name = document.querySelector('#post [name="name"]');
const price = document.querySelector('#post [name="price"]');
const factor = document.querySelector('#post [name="factor"]');
const img = document.querySelector('#post [name="img"]');
const tBody = document.querySelector('tbody');
const divOrders = document.querySelector('div.orders');
const pBoughtFurniture = divOrders.querySelector('p');
const spanTotalPrice = divOrders.querySelectorAll('p')[1].querySelector('span');

const logoutBtn = document.getElementById('logoutBtn');
logoutBtn.addEventListener('click', onLogout);

const buttonAllOrders = document.querySelector('div.orders button');
buttonAllOrders.addEventListener('click', listAllOrders);

const token = sessionStorage.getItem('accessToken');
const ownerId = sessionStorage.getItem('ownerId');

window.addEventListener('load', loadAllFurniture);

const createBtn = document.querySelector('#post button');
createBtn.addEventListener('click', onCreate);

const buyBtn = document.getElementById('buy');
buyBtn.addEventListener('click', buy);

function onLogout(event) {
    fetch('http://localhost:3030/users/logout', {
        headers: {
            'X-Authorization': token
        }
    });
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('ownerId');

    window.location = '../06.Furniture/index.html';
}

async function listAllOrders(event) {
    console.log(ownerId);

    pBoughtFurniture.innerHTML = '';

    let totalPrice = 0;

    try {
        const response = await fetch('http://localhost:3030/data/orders');
        if(response.ok === false) {
            const error = await response.json();
            throw new Error(error.message);
        }

        const data = await response.json();
        console.log(data);
        data.forEach(f => {
            if(ownerId === f._ownerId) {
                const span = document.createElement('span');
                span.textContent = 'Bought furniture:';                
                const spanFurnitureName = document.createElement('span');
                spanFurnitureName.textContent = ` ${f.name}`;
                pBoughtFurniture.appendChild(span);                
                pBoughtFurniture.appendChild(spanFurnitureName);
                const br = document.createElement('br');
                pBoughtFurniture.appendChild(br);
                totalPrice += Number(f.price);
            }
        });
        
        spanTotalPrice.textContent = totalPrice;        

    } catch (error) {
        alert(error.message);
    }
}

async function buy(event) {
    const rows = Array.from(tBody.children);
    const checkedFurniture = []
    rows.forEach(r => {
        const columns = Array.from(r.children);
        if(columns[4].children[0].checked) {
            checkedFurniture.push(r.id);
            columns[4].children[0].checked = false;
        }
    });

    try {
        const response = await fetch('http://localhost:3030/data/furniture');
        if(response.ok === false) {
            const error = await response.json();
            throw new Error(error.message);
        }

        const data = await response.json();
        
        for(const id of checkedFurniture) {
            for(const item of data) {
                if(id === item._id) {
                    //console.log(id);
                    const furniture = {
                        name: item.name,
                        price: item.price,
                        factor: item.factor,
                        img: item.img
                    }

                    try {
                        const responseOrder = await fetch('http://localhost:3030/data/orders', {
                            method: 'POST',
                            headers: {
                                'Content-type': 'application/json',
                                'X-Authorization': token
                            },
                            body: JSON.stringify(furniture)
                        });
                        if(responseOrder.ok === false) {
                            const error = await responseOrder.json();
                            throw new Error(error.message);
                        }                     
                        

                    } catch (error) {
                        alert(error.message);
                    }
                }
            }
        }

    } catch (error) {
        alert(error.message);
    }
    
}

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
            trElement.setAttribute('id', f._id);
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

async function onCreate(event) {
    event.preventDefault();

    if(name.value === '' || price.value === '' || factor.value === '' || img.value === '') {
        alert('All fields ar required');
        return;
    }

    const furniture = {
        name: name.value,
        price: price.value,
        factor: factor.value,
        img: img.value
    }    

    try {
        const response = await fetch('http://localhost:3030/data/furniture', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'X-Authorization': token
            },
            body: JSON.stringify(furniture)
        });
        if(response.ok === false) {
            const error = await response.json();
            throw new Error(error.message);
        }
    } catch (error) {
        alert(error.message);
    }

    name.value = '';
    price.value = '';
    factor.value = '';
    img.value = '';

    loadAllFurniture();
}

function createTdWithPElement(content, parent) {
    const tdElement = document.createElement('td');
    const pElement = document.createElement('p');
    pElement.textContent = content;
    tdElement.appendChild(pElement);
    parent.appendChild(tdElement);
}

// module.exports = {
//     loadAllFurniture,
//     createTdWithPElement
// }