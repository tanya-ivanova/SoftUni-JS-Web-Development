function solve(){
   let creatorElement = document.getElementById('creator');
   let titleElement = document.getElementById('title');
   let categoryElement = document.getElementById('category');
   let contentElement = document.getElementById('content');

   let postsElement = document.querySelector('main section');
   let archiveOrderedList = document.querySelector('.archive-section ol');
   
   let buttonCreate = document.querySelector('.create');
   buttonCreate.addEventListener('click', onCreate);

   function onCreate(event) {
      event.preventDefault();

      let article = document.createElement('article');

      let h1Title = document.createElement('h1');
      h1Title.textContent = titleElement.value;

      let pCategory = document.createElement('p');
      pCategory.textContent = 'Category:';

      let strongCategory = document.createElement('strong');
      strongCategory.textContent = categoryElement.value;
      pCategory.appendChild(strongCategory);

      let pCreator = document.createElement('p');
      pCreator.textContent = 'Creator:';

      let strongCreator = document.createElement('strong');
      strongCreator.textContent = creatorElement.value;
      pCreator.appendChild(strongCreator);

      let pContent = document.createElement('p');
      pContent.textContent = contentElement.value;

      let divButtons = document.createElement('div');
      divButtons.classList.add('buttons');

      let buttonDelete = document.createElement('button');
      buttonDelete.textContent = 'Delete';
      buttonDelete.classList.add('btn');
      buttonDelete.classList.add('delete');
      divButtons.appendChild(buttonDelete);

      let buttonArchive = document.createElement('button');
      buttonArchive.textContent = 'Archive';
      buttonArchive.classList.add('btn');
      buttonArchive.classList.add('archive');
      divButtons.appendChild(buttonArchive);

      article.appendChild(h1Title);
      article.appendChild(pCategory);
      article.appendChild(pCreator);
      article.appendChild(pContent);
      article.appendChild(divButtons);

      postsElement.appendChild(article);

      let title = titleElement.value;

      creatorElement.value = '';
      titleElement.value = '';
      categoryElement.value = '';
      contentElement.value = '';

      buttonArchive.addEventListener('click', onArchive);
      buttonDelete.addEventListener('click', onDelete);

      function onDelete(event) {
         article.remove();
      }

      function onArchive(event) {
         article.remove();
         
         let elements = Array.from(archiveOrderedList.children);
         elements.forEach(e => e.remove());
         
         let newLi = document.createElement('li');
         newLi.textContent = title;

         elements.push(newLi);
         
         let sortedTitles = [];

         for(let i = 0; i < elements.length; i++) {
            sortedTitles.push(elements[i].textContent);
         }
         sortedTitles.sort((a, b) => a.localeCompare(b));
         
         for(let i = 0; i < elements.length; i++) {
            elements[i].textContent = sortedTitles[i];
         }

         elements.forEach(e => archiveOrderedList.appendChild(e));
         
      }

   }
}
