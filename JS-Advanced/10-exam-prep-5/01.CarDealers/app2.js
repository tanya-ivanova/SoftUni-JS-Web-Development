window.addEventListener("load", solve);

function solve() {
    const makeElement = document.getElementById('make');
    const modelElement = document.getElementById('model');
    const yearElement = document.getElementById('year');
    const fuelElement = document.getElementById('fuel');
    const originalCostElement = document.getElementById('original-cost');
    const sellingPriceElement = document.getElementById('selling-price');
    const publishBtn = document.getElementById('publish');
    const tbodyElement = document.getElementById('table-body');
    const carsListUlElement = document.getElementById('cars-list');
    const profitElement = document.getElementById('profit');
    let totalProfit = 0;

    publishBtn.addEventListener('click', onPublish);

    function onPublish(event) {
        event.preventDefault();

        if(makeElement.value === '' || modelElement.value === '' || yearElement.value === '' 
        || fuelElement.value === '' || originalCostElement.value === '' || sellingPriceElement.value === '') {
            return;
        }

        if(originalCostElement.value > sellingPriceElement.value) {
            return;
        }

        const trElement = document.createElement('tr');
        trElement.classList.add('row');
        const tdMakeElement = document.createElement('td');
        tdMakeElement.textContent = makeElement.value;
        const tdModelElement = document.createElement('td');
        tdModelElement.textContent = modelElement.value;
        const tdYearElement = document.createElement('td');
        tdYearElement.textContent = yearElement.value;
        const tdFuelElement = document.createElement('td');
        tdFuelElement.textContent = fuelElement.value;
        const tdOrigiinalCost = document.createElement('td');
        tdOrigiinalCost.textContent = originalCostElement.value;
        const tdSellingPriceElement = document.createElement('td');
        tdSellingPriceElement.textContent = sellingPriceElement.value;
        const tdButtons = document.createElement('td');
        const editBtn = document.createElement('button');
        editBtn.className = 'action-btn edit';
        editBtn.textContent = 'Edit';
        const sellBtn = document.createElement('button');
        sellBtn.className = 'action-btn sell';
        sellBtn.textContent = 'Sell';
        tdButtons.appendChild(editBtn);
        tdButtons.appendChild(sellBtn);
        trElement.appendChild(tdMakeElement);
        trElement.appendChild(tdModelElement);
        trElement.appendChild(tdYearElement);
        trElement.appendChild(tdFuelElement);
        trElement.appendChild(tdOrigiinalCost);
        trElement.appendChild(tdSellingPriceElement);
        trElement.appendChild(tdButtons);
        tbodyElement.appendChild(trElement);

        makeElement.value = '';
        modelElement.value = '';
        yearElement.value = '';
        fuelElement.value = '';
        originalCostElement.value = '';
        sellingPriceElement.value = '';

        editBtn.addEventListener('click', onEdit);
        sellBtn.addEventListener('click', onSell);

        function onEdit(event) {
            makeElement.value = tdMakeElement.textContent;
            modelElement.value = tdModelElement.textContent;
            yearElement.value = tdYearElement.textContent;
            fuelElement.value = tdFuelElement.textContent;
            originalCostElement.value = tdOrigiinalCost.textContent;
            sellingPriceElement.value = tdSellingPriceElement.textContent;

            trElement.remove();
        }

        function onSell(event) {
            const liElement = document.createElement('li');
            liElement.classList.add('each-list');
            const spanMakeModelElement = document.createElement('span');
            spanMakeModelElement.textContent = tdMakeElement.textContent + ' ' + tdModelElement.textContent;
            const spanYearElement = document.createElement('span');
            spanYearElement.textContent = tdYearElement.textContent;
            const spanPriceDifferenceElement = document.createElement('span');
            spanPriceDifferenceElement.textContent = Number(tdSellingPriceElement.textContent) - Number(tdOrigiinalCost.textContent);
            totalProfit += Number(tdSellingPriceElement.textContent) - Number(tdOrigiinalCost.textContent);
            liElement.appendChild(spanMakeModelElement);
            liElement.appendChild(spanYearElement);
            liElement.appendChild(spanPriceDifferenceElement);
            carsListUlElement.appendChild(liElement);

            trElement.remove();

            profitElement.textContent = totalProfit.toFixed(2);
        }

    }
}