window.addEventListener("load", solve);

function solve() {
    let product = document.getElementById('type-product');
    let description = document.getElementById('description');
    let client = document.getElementById('client-name');
    let phone = document.getElementById('client-phone');
    let sectionReceivedOrders = document.getElementById('received-orders');
    let sectionCompletedOrders = document.getElementById('completed-orders');

    let buttonSendForm = document.querySelector('#main-container button');
    let buttonClear = document.querySelector('#completed-orders button');
    
    buttonSendForm.addEventListener('click', onSend);
    buttonClear.addEventListener('click', onClear);

    function onSend(event) {
        event.preventDefault();
        if(description.value === '' || client.value === '' || phone.value === '') {
            return;
        }

        let order = createOrder();
        sectionReceivedOrders.appendChild(order);

        description.value = '';
        client.value = '';
        phone.value = '';
    }

    function createOrder(event) {
        let div = document.createElement('div');
        div.classList.add('container');

        let h2 = document.createElement('h2');
        h2.textContent = `Product type for repair: ${product.value}`;

        let h3 = document.createElement('h3');
        h3.textContent = `Client information: ${client.value}, ${phone.value}`;

        let h4 = document.createElement('h4');
        h4.textContent = `Description of the problem: ${description.value}`;

        let buttonStartRepair = document.createElement('button');
        buttonStartRepair.textContent = 'Start repair';
        buttonStartRepair.classList.add('start-btn');

        let buttonFinishRepair = document.createElement('button');
        buttonFinishRepair.textContent = 'Finish repair';
        buttonFinishRepair.classList.add('finish-btn');
        buttonFinishRepair.disabled = true;

        div.appendChild(h2);
        div.appendChild(h3);
        div.appendChild(h4);
        div.appendChild(buttonStartRepair);
        div.appendChild(buttonFinishRepair);

        buttonStartRepair.addEventListener('click', startRepair);
        buttonFinishRepair.addEventListener('click', finishRepair);

        function startRepair(event) {
            buttonStartRepair.disabled = true;
            buttonFinishRepair.disabled = false;
        }

        function finishRepair(event) {
            sectionCompletedOrders.appendChild(div);
            buttonStartRepair.remove();
            buttonFinishRepair.remove();
        }

        return div;
    }

    function onClear(event) {
        Array.from(sectionCompletedOrders.querySelectorAll('div')).forEach(d => d.remove());
    }
}
