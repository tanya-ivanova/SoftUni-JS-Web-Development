const element = document.createElement('div');
element.id = 'overlay';
element.innerHTML = `<div id="modal">
<p></p>
<div>
    <button class="modal-ok">OK</button>
    <button class="modal-cancel">Cancel</button>
</div>
</div>`;

element.querySelector('.modal-ok').addEventListener('click', () => onChoice(true));
element.querySelector('.modal-cancel').addEventListener('click', () => onChoice(false));

const msg = element.querySelector('p');

let onChoice = null;

export function showModal(message) {    
    msg.textContent = message;
    document.body.appendChild(element);

    return new Promise((resolve, reject) => {
        onChoice = (choice) => {
            clear();
            resolve(choice);
        };
    });
}

export function clear() {
    element.remove();
}