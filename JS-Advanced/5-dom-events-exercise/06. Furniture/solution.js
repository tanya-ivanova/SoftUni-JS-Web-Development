function solve() {
  let textareas = Array.from(document.querySelectorAll('#exercise textarea'));
  let inputTextarea = textareas[0];
  let outputTextarea = textareas[1];
  let outputText = '';

  let buttons = Array.from(document.querySelectorAll('button'));
  let generateButton = buttons[0];
  let buyButton = buttons[1];
  
  generateButton.addEventListener('click', generate);

  let checkboxesAll = [];

  buyButton.addEventListener('click', buy);

  function generate (event) {
    let inputArray = JSON.parse(inputTextarea.value);
    
    for (let obj of inputArray) {
      
      let trElement = document.createElement('tr');
      document.getElementsByTagName('tbody')[0].appendChild(trElement);

      let img = document.createElement('img');
      img.src = obj.img;
      let td1 = document.createElement('td');
      td1.appendChild(img);
      trElement.appendChild(td1);

      let pName = document.createElement('p');
      pName.textContent = obj.name;
      let td2 = document.createElement('td');
      td2.appendChild(pName);
      trElement.appendChild(td2);
      
      let pPrice = document.createElement('p');
      pPrice.textContent = Number(obj.price);
      let td3 = document.createElement('td');
      td3.appendChild(pPrice);
      trElement.appendChild(td3);

      let pDecFactor = document.createElement('p');
      pDecFactor.textContent = Number(obj.decFactor);
      let td4 = document.createElement('td');
      td4.appendChild(pDecFactor);
      trElement.appendChild(td4);

      let inputCheckbox = document.createElement('input');
      inputCheckbox.type = 'checkbox';
      let td5 = document.createElement('td');
      td5.appendChild(inputCheckbox);
      trElement.appendChild(td5);  
      
      checkboxesAll = Array.from(document.querySelectorAll('input[type="checkbox"]'));   
      checkboxesAll.forEach(c => c.disabled = false);      
    }    
  }

  function buy (event) {
    let products = [];
    let totalPrice = 0;
    let decorationSum = 0;
    let decorationCounter = 0;

    checkboxesAll.forEach(checkbox => {
      if (checkbox.checked) {
        let parentTd = checkbox.parentElement;
        let decoration = Number(parentTd.previousElementSibling.children[0].textContent);
        let decorationTd = parentTd.previousElementSibling;
        
        let price = Number(decorationTd.previousElementSibling.children[0].textContent);
        let priceTd = decorationTd.previousElementSibling;

        let product = priceTd.previousElementSibling.children[0].textContent;
        
        decorationCounter++;
        products.push(product);
        totalPrice += price;
        decorationSum += decoration;
      }
    })

    let averageDecFactor = decorationSum / decorationCounter;

    outputText += `Bought furniture: ${products.join(', ')}` + '\n';
    outputText += `Total price: ${totalPrice.toFixed(2)}` + '\n';
    outputText += `Average decoration factor: ${averageDecFactor}`;

    outputTextarea.value = outputText;
  }
  
}