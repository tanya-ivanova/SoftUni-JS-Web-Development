import {html, render} from './node_modules/lit-html/lit-html.js';
import {towns} from './towns.js';

function search() {
   const divTowns = document.getElementById('towns');
   const inputElement = document.getElementById('searchText');
   const searchBtn = document.querySelector('article button');
   const divResult = document.getElementById('result');

   searchBtn.addEventListener('click', onSearch);

   const townsTemplate = (towns) => html`
   <ul>${towns.map(t => html`<li>${t}</li>`)}</ul>`;
  
   render(townsTemplate(towns), divTowns);

   function onSearch(event) {
      const searched = inputElement.value.toLowerCase();      
      inputElement.value = '';
      const liElements = Array.from(divTowns.querySelectorAll('li'));
      
      let counter = 0;
      for(const liElement of liElements) {
         const town = liElement.textContent.toLowerCase();
         if(town.includes(searched)) {
            liElement.classList.add('active');
            counter++;
         } else {
            liElement.classList.remove('active');
         }
      }
      divResult.textContent = `${counter} matches found`;
   }
}

search();
