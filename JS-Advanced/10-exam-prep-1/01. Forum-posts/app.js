window.addEventListener("load", solve);

function solve() {
  let title = document.getElementById('post-title');
  let category = document.getElementById('post-category');
  let content = document.getElementById('post-content');

  let publishButton = document.getElementById('publish-btn');
  publishButton.addEventListener('click', onPublish);

  let ulReviewPost = document.getElementById('review-list');
  let ulPublishedPost = document.getElementById('published-list');
  
  let buttonClear = document.getElementById('clear-btn');
  buttonClear.addEventListener('click', onClear);

  function onPublish(event) {
    event.preventDefault();

    if(title.value === '' || category.value === '' || content.value === '') {
      return;
    }

    let liReview = createPost(title.value, category.value, content.value);
    ulReviewPost.appendChild(liReview);
    clearInputFields();
  }

  function createPost(titleValue, categoryValue, contentValue) {
    let liReviewPost = document.createElement('li');
    liReviewPost.classList.add('rpost');

    let articleReviewPost = document.createElement('article');

    let h4ReviewPost = document.createElement('h4');
    h4ReviewPost.textContent = titleValue;

    let p1ReviewPost = document.createElement('p');
    p1ReviewPost.textContent = `Category: ${categoryValue}`;

    let p2ReviewPost = document.createElement('p');
    p2ReviewPost.textContent = `Content: ${contentValue}`;

    let buttonEdit = document.createElement('button');
    buttonEdit.classList.add('action-btn');
    buttonEdit.classList.add('edit');
    buttonEdit.textContent = 'Edit';

    let buttonApprove = document.createElement('button');
    buttonApprove.classList.add('action-btn');
    buttonApprove.classList.add('approve');
    buttonApprove.textContent = 'Approve';

    liReviewPost.appendChild(articleReviewPost);    
    liReviewPost.appendChild(buttonApprove);
    liReviewPost.appendChild(buttonEdit);
    articleReviewPost.appendChild(h4ReviewPost);
    articleReviewPost.appendChild(p1ReviewPost);
    articleReviewPost.appendChild(p2ReviewPost);
    
    buttonEdit.addEventListener('click', onEdit);
    buttonApprove.addEventListener('click', onApprove);

    function onEdit(event) {
      title.value = h4ReviewPost.textContent;
      category.value = p1ReviewPost.textContent.substring(10);
      content.value = p2ReviewPost.textContent.substring(9);
      liReviewPost.remove();
    }

    function onApprove(event) {
      ulPublishedPost.appendChild(liReviewPost);
      buttonApprove.remove();
      buttonEdit.remove();
    }

    return liReviewPost;
  }

  function onClear(event) {
    Array.from(ulPublishedPost.children).forEach(li => li.remove());
  }

  function clearInputFields() {
    title.value = '';
    category.value = '';
    content.value = '';
  }
  
}
