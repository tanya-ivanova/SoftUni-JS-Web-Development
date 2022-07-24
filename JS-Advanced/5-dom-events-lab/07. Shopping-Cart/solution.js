function solve() {
   let output = document.querySelector('textarea');
   output.value = '';

   let addButtons = Array.from(document.querySelectorAll('button.add-product'));
   let checkoutButton = document.querySelector('button.checkout');
   
   let products = {};
    
   for (let addButton of addButtons) {
      addButton.addEventListener('click', onClick);
   }
  
   checkoutButton.addEventListener('click', onCheckout);

   function onClick (event) {
      let parent = event.target.parentElement;
      let productParent = parent.parentElement;
      let divChildren = Array.from(productParent.children);
      let productDetails = Array.from(divChildren[1].children);
      
      let product = productDetails[0].textContent;
      let price = Number(divChildren[3].textContent);

      if (!products.hasOwnProperty(product)) {
         products[product] = price;
      } else {
         products[product] += price;
      }
      
      output.value += `Added ${product} for ${price.toFixed(2)} to the cart.\n`;      
   }

   function onCheckout(event) {
      let listOfProducts = Object.keys(products);      
      let prices = Object.values(products);
      let totalPrice = prices.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
      
      output.value += `You bought ${listOfProducts.join(', ')} for ${totalPrice.toFixed(2)}.`;

      for (let addButton of addButtons) {
         addButton.removeEventListener('click', onClick);
      }

      checkoutButton.removeEventListener('click', onCheckout);
   }   
}