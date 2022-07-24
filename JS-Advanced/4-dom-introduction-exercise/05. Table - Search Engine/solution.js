function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let rows = Array.from(document.querySelectorAll('tbody tr'));      
      let searchedText = document.getElementById('searchField').value;
      let counterRow = 0;

      for (let row of rows) {
         row.classList.remove('select');
         let columns = Array.from(row.children);
         counterRow++;

         for (let column of columns) {
            if (column.textContent.includes(searchedText) && searchedText !== '') {
               let searchedRow  = document.querySelector(`tbody tr:nth-child(${counterRow})`);
               searchedRow.classList.add('select');               
            }
         }
      }
      document.getElementById('searchField').value = '';      
   }   
}