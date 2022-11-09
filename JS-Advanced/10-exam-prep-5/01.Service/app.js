window.addEventListener('load', solve);

function solve() {
    const productTypeElement = document.getElementById('type-product');
    const descriptionElement = document.getElementById('description');
    const clientNameElement = document.getElementById('client-name');
    const clienPhoneelement = document.getElementById('client-phone');
    const sendBtn = document.querySelector('#right button');
    const receivedOrdersSection = document.getElementById('received-orders');
    const completedOrdersSection = document.getElementById('completed-orders');
    const clearBtn = completedOrdersSection.querySelector('button');

    sendBtn.addEventListener('click', onSend);
    clearBtn.addEventListener('click', onClear);

    function onSend(event) {
        event.preventDefault();

        if(descriptionElement.value === '' || clientNameElement.value === '' || clienPhoneelement.value === '') {
            return;
        }

        const divContainer = document.createElement('div');
        divContainer.classList.add('container');
        const h2ProductType = document.createElement('h2');
        h2ProductType.textContent = `Product type for repair: ${productTypeElement.value}`;
        const h3ClientInformation = document.createElement('h3');
        h3ClientInformation.textContent = `Client information: ${clientNameElement.value}, ${clienPhoneelement.value}`;
        const h4Description = document.createElement('h4');
        h4Description.textContent = `Description of the problem: ${descriptionElement.value}`;
        const startBtn = document.createElement('button');
        startBtn.classList.add('start-btn');
        startBtn.textContent = 'Start repair';
        const finishBtn = document.createElement('button');
        finishBtn.classList.add('finish-btn');
        finishBtn.textContent = 'Finish repair';
        finishBtn.disabled = true;
        divContainer.appendChild(h2ProductType);
        divContainer.appendChild(h3ClientInformation);
        divContainer.appendChild(h4Description);
        divContainer.appendChild(startBtn);
        divContainer.appendChild(finishBtn);
        receivedOrdersSection.appendChild(divContainer);

        productTypeElement.value = 'Computer';
        descriptionElement.value = '';
        clientNameElement.value = '';
        clienPhoneelement.value = '';

        startBtn.addEventListener('click', onStart);
        finishBtn.addEventListener('click', onFinish);

        function onStart(event) {
            startBtn.disabled = true;
            finishBtn.disabled = false;
        }

        function onFinish(event) {
            startBtn.remove();
            finishBtn.remove();
            completedOrdersSection.appendChild(divContainer);
        }
    }

    function onClear(event) {
        const divsToRemove = Array.from(completedOrdersSection.querySelectorAll('.container'));
        divsToRemove.forEach(div => div.remove());
    }
}