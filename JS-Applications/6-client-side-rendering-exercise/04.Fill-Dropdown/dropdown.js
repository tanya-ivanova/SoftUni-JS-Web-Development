import {html, render} from './node_modules/lit-html/lit-html.js';

const menu = document.getElementById('menu');
const inputElement = document.getElementById('itemText');
document.querySelector('form').addEventListener('submit', onAdd);

loadOptions();

const optionTemplate = (option) => html`
<option id=${option._id}>${option.text}</option>`

function update(data) {
    render(data.map(optionTemplate), menu);
}

async function loadOptions() {
    try {
        const res = await fetch('http://localhost:3030/jsonstore/advanced/dropdown');
        if(res.ok === false) {
            const error = await res.json();
            throw new Error(error.message);
        }
        
        const result = await res.json();
        const data = [];
        Object.entries(result).forEach(el => data.push(el[1]));
        update(data);

    } catch (error) {
        alert(error.message);
    }
}

async function onAdd(event) {
    event.preventDefault();

    const text = inputElement.value;
    inputElement.value = '';

    try {
        const res = await fetch('http://localhost:3030/jsonstore/advanced/dropdown', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({text})
        });
        if(res.ok === false) {
            const error = await res.json();
            throw new Error(error.message);
        }
        loadOptions();

    } catch (error) {
        alert(error.message);
    }
}
