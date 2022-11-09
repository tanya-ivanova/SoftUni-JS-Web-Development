window.addEventListener("load", solve);

function solve() {
  const titleElement = document.getElementById('post-title');
  const categoryElement = document.getElementById('post-category');
  const contentElement = document.getElementById('post-content');
  const publishBtn = document.getElementById('publish-btn');
  const ulReviewList = document.getElementById('review-list');
  const ulPublishedList = document.getElementById('published-list');
  const clearBtn = document.getElementById('clear-btn');
  
  publishBtn.addEventListener('click', onPublish);
  clearBtn.addEventListener('click', onClear);

  function onPublish(event) {
    event.preventDefault();

    if(titleElement.value === '' || categoryElement.value === '' || contentElement.value === '') {
      return;
    }

    const liElement = document.createElement('li');
    liElement.classList.add('rpost');
    const articleElement = document.createElement('article');
    const h4Element = document.createElement('h4');
    h4Element.textContent = titleElement.value;
    const pCategoryElement = document.createElement('p');
    pCategoryElement.textContent = `Category: ${categoryElement.value}`;
    const pContentElement = document.createElement('p');
    pContentElement.textContent = `Content: ${contentElement.value}`;
    articleElement.appendChild(h4Element);
    articleElement.appendChild(pCategoryElement);
    articleElement.appendChild(pContentElement);
    const editBtn = document.createElement('button');
    editBtn.className = 'action-btn edit';
    editBtn.textContent = 'Edit';
    const approveBtn = document.createElement('button');
    approveBtn.className = 'action-btn approve';
    approveBtn.textContent = 'Approve';
    liElement.appendChild(articleElement);
    liElement.appendChild(approveBtn);
    liElement.appendChild(editBtn);    
    ulReviewList.appendChild(liElement);

    titleElement.value = '';
    categoryElement.value = '';
    contentElement.value = '';

    editBtn.addEventListener('click', onEdit);
    approveBtn.addEventListener('click', onApprove);

    function onEdit(event) {
      titleElement.value = h4Element.textContent;
      categoryElement.value = pCategoryElement.textContent.substring(10);
      contentElement.value = pContentElement.textContent.substring(9);

      liElement.remove();
    }

    function onApprove(event) {
      editBtn.remove();
      approveBtn.remove();
      ulPublishedList.appendChild(liElement);
    }
  }

  function onClear(event) {
    ulPublishedList.innerHTML = '';
    //Array.from(ulPublishedList.children).forEach(li => li.remove());
  }
}
