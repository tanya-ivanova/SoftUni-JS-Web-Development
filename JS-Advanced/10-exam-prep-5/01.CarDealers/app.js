window.addEventListener("load", solve);

function solve() {
  let makeElement = document.getElementById('make');
  let modelElement = document.getElementById('model');
  let yearElement = document.getElementById('year');
  let fuelElement = document.getElementById('fuel');
  let originalCostElement = document.getElementById('original-cost');
  let sellingPriceElement = document.getElementById('selling-price');

  let buttonPublish = document.getElementById('publish');
  buttonPublish.addEventListener('click', onPublish);

  let tableBodyElement = document.getElementById('table-body');
  let carsListElement = document.getElementById('cars-list');
  let profitElement = document.getElementById('profit');

  function onPublish(event) {
    event.preventDefault();

    let make = makeElement.value;
    let model = modelElement.value;
    let year = yearElement.value;
    let fuel = fuelElement.value;
    let originalCost = Number(originalCostElement.value);
    let sellingPrice = Number(sellingPriceElement.value);

    if(make === '' || model === '' || year === '' || fuel === '' || originalCostElement.value === '' || sellingPriceElement.value === '') {
      return;
    }

    if(originalCost > sellingPrice) {
      return;
    }

    let trRow = document.createElement('tr');
    trRow.classList.add('row');

    let tdMake = document.createElement('td');
    tdMake.textContent = make;

    let tdModel = document.createElement('td');
    tdModel.textContent = model;

    let tdYear = document.createElement('td');
    tdYear.textContent = year;

    let tdFuel = document.createElement('td');
    tdFuel.textContent = fuel;

    let tdOriginalCost = document.createElement('td');
    tdOriginalCost.textContent = originalCost;

    let tdSellingPrice = document.createElement('td');
    tdSellingPrice.textContent = sellingPrice;

    let tdButtons = document.createElement('td');

    let buttonEdit = document.createElement('button');
    buttonEdit.classList.add('action-btn');
    buttonEdit.classList.add('edit');
    buttonEdit.textContent = 'Edit';

    let buttonSell = document.createElement('button');
    buttonSell.classList.add('action-btn');
    buttonSell.classList.add('sell');
    buttonSell.textContent = 'Sell';

    tdButtons.appendChild(buttonEdit);
    tdButtons.appendChild(buttonSell);

    trRow.appendChild(tdMake);
    trRow.appendChild(tdModel);
    trRow.appendChild(tdYear);
    trRow.appendChild(tdFuel);
    trRow.appendChild(tdOriginalCost);
    trRow.appendChild(tdSellingPrice);
    trRow.appendChild(tdButtons);

    tableBodyElement.appendChild(trRow);

    makeElement.value = '';
    modelElement.value = '';
    yearElement.value = '';
    fuelElement.value = '';
    originalCostElement.value = '';
    sellingPriceElement.value = '';

    buttonEdit.addEventListener('click', onEdit);
    buttonSell.addEventListener('click', onSell);

    function onEdit(event) {
      makeElement.value = make;
      modelElement.value = model;
      yearElement.value = year;
      fuelElement.value = fuel;
      originalCostElement.value = originalCost;
      sellingPriceElement.value = sellingPrice;
      
      trRow.remove();
    }

    function onSell(event) {      
      trRow.remove();

      let liElement = document.createElement('li');
      liElement.classList.add('each-list');

      let spanMakeAndModel = document.createElement('span');
      spanMakeAndModel.textContent = `${make} ${model}`;

      let spanYear = document.createElement('span');
      spanYear.textContent = year;
      
      let spanProfit = document.createElement('span');
      let profit = sellingPrice - originalCost
      spanProfit.textContent = profit;

      liElement.appendChild(spanMakeAndModel);
      liElement.appendChild(spanYear);
      liElement.appendChild(spanProfit);

      carsListElement.appendChild(liElement);

      let totalprofit = Number(profitElement.textContent);
      totalprofit += profit;
      profitElement.textContent = totalprofit.toFixed(2);

    }
  }
}
