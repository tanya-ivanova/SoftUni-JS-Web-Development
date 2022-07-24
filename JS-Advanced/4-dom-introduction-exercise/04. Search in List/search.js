function search() {
   let towns = Array.from(document.querySelectorAll('#towns li'));
   
   let searchedText = document.getElementById('searchText').value;
   
   let counter = 0;

   for (let element of towns) {
      let town = element.textContent;
      
      if (town.includes(searchedText) && searchedText !== '') {
         counter++;
         element.style.textDecoration = "underline";
         element.style.fontWeight = "bold";
      } else {
         element.style.textDecoration = "none";
         element.style.fontWeight = "normal";
      }
   }

   if (counter > 0) {
      let result = `${counter} matches found`;
      document.getElementById('result').textContent = result;
   }
}
