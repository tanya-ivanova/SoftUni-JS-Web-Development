function create(words) {
   let contentDiv = document.getElementById('content');

   for (let word of words) {
      let paragraph = document.createElement('p');
      paragraph.textContent = word;
      paragraph.style.display = 'none';
      let div = document.createElement('div');
      div.appendChild(paragraph);
      contentDiv.appendChild(div);

      div.addEventListener('click', function onClick() {
         paragraph.style.display = '';
      });
   }   
}