window.addEventListener('load', solve);

function solve() {
    let model = document.getElementById('model');
    let year = document.getElementById('year');
    let description = document.getElementById('description');
    let price = document.getElementById('price');

    let buttonAdd = document.getElementById('add');
    buttonAdd.addEventListener('click', add);

    let furnitureList = document.getElementById('furniture-list');

    let totalPriceElement = document.querySelector('tfoot .total-price');

    function add(event) {
        event.preventDefault();

        if(model.value === '' || description.value === '') {
            return;
        }

        if(year.value < 1 || price.value < 1) {
            return;
        }

        createAndAppendFurniture();

        model.value = '';
        year.value = '';
        description.value = '';
        price.value = '';
    }

    function createAndAppendFurniture(event) {
        let trInfo = document.createElement('tr');
        trInfo.classList.add('info');

        let tdModel = document.createElement('td');
        tdModel.textContent = model.value;

        let tdPrice = document.createElement('td');        
        tdPrice.textContent = Number(price.value).toFixed(2);

        let tdButtons = document.createElement('td');

        let buttonMoreInfo = document.createElement('button');
        buttonMoreInfo.classList.add('moreBtn');
        buttonMoreInfo.textContent = 'More Info';

        let buttonBuyIt = document.createElement('button');
        buttonBuyIt.classList.add('buyBtn');
        buttonBuyIt.textContent = 'Buy it';

        tdButtons.appendChild(buttonMoreInfo);
        tdButtons.appendChild(buttonBuyIt);

        trInfo.appendChild(tdModel);
        trInfo.appendChild(tdPrice);
        trInfo.appendChild(tdButtons);

        let trHide = document.createElement('tr');
        trHide.classList.add('hide');

        let tdYear = document.createElement('td');
        tdYear.textContent = `Year: ${year.value}`;

        let tdDescription = document.createElement('td');
        tdDescription.colSpan = 3;
        tdDescription.textContent = `Description: ${description.value}`;

        trHide.appendChild(tdYear);
        trHide.appendChild(tdDescription);

        furnitureList.appendChild(trInfo);
        furnitureList.appendChild(trHide);

        buttonMoreInfo.addEventListener('click', info);
        buttonBuyIt.addEventListener('click', buy);
    }

    function info(event) {
        if(event.target.textContent === 'More Info') {
            event.target.textContent = 'Less Info';
            event.target.parentElement.parentElement.nextElementSibling.style.display = 'contents';
        } else {
            event.target.textContent = 'More Info';
            event.target.parentElement.parentElement.nextElementSibling.style.display = 'none';
        }
    }

    function buy(event) {
        let priceForFurniture = Number(event.target.parentElement.previousElementSibling.textContent);
        let totalPrice = Number(totalPriceElement.textContent);
        totalPrice += priceForFurniture;
        totalPriceElement.textContent = totalPrice.toFixed(2);

        let rowToBeRemoved = event.target.parentElement.parentElement;
        rowToBeRemoved.nextElementSibling.remove();
        rowToBeRemoved.remove();
    }
}
