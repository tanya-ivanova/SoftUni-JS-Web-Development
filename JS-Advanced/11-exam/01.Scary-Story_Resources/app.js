window.addEventListener("load", solve);

function solve() {
  const firstNameElement = document.getElementById('first-name');
  const lastNameElement = document.getElementById('last-name');
  const ageElement = document.getElementById('age');
  const storyTitleElement = document.getElementById('story-title');
  const genreElement = document.getElementById('genre');
  const storyTextElement = document.getElementById('story');
  const publishBtn = document.getElementById('form-btn');
  const ulPreviewList = document.getElementById('preview-list');
  const mainElement = document.getElementById('main');

  publishBtn.addEventListener('click', onPublish);

  function onPublish(event) {
    event.preventDefault();

    const firstName = firstNameElement.value;
    const lastName = lastNameElement.value;
    const age = ageElement.value;
    const title = storyTitleElement.value;
    const genre = genreElement.value;
    const text = storyTextElement.value;

    if(firstName === '' || lastName === '' || age === ''
    || title === '' || text === '') {
      return;
    }

    const liElement = document.createElement('li');
    liElement.classList.add('story-info');
    const articleElement = document.createElement('article');
    const h4Name = document.createElement('h4');
    h4Name.textContent = `Name: ${firstName} ${lastName}`;
    const pAge = document.createElement('p');
    pAge.textContent = `Age: ${age}`;
    const pTitle = document.createElement('p');
    pTitle.textContent = `Title: ${title}`;
    const pGenre = document.createElement('p');
    pGenre.textContent = `Genre: ${genre}`;
    const pText = document.createElement('p');
    pText.textContent = text;
    articleElement.appendChild(h4Name);
    articleElement.appendChild(pAge);
    articleElement.appendChild(pTitle);
    articleElement.appendChild(pGenre);
    articleElement.appendChild(pText);
    const saveBtn = document.createElement('button');
    saveBtn.classList.add('save-btn');
    saveBtn.textContent = 'Save Story';
    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.textContent = 'Edit Sroty';
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'Delete Story';
    liElement.appendChild(articleElement);
    liElement.appendChild(saveBtn);
    liElement.appendChild(editBtn);
    liElement.appendChild(deleteBtn);
    ulPreviewList.appendChild(liElement);

    publishBtn.disabled = true;
    firstNameElement.value = '';
    lastNameElement.value = '';
    ageElement.value = '';
    storyTitleElement.value = '';
    genreElement.value = '';
    storyTextElement.value = '';

    editBtn.addEventListener('click', onEdit);
    saveBtn.addEventListener('click', onSave);
    deleteBtn.addEventListener('click', onDelete);

    function onEdit(event) {
      publishBtn.disabled = false;
      firstNameElement.value = firstName;
      lastNameElement.value = lastName;
      ageElement.value = age;
      storyTitleElement.value = title;
      genreElement.value = genre;
      storyTextElement.value = text;

      liElement.remove();
    }

    function onSave(event) {
      mainElement.innerHTML = '';
      const h1Element = document.createElement('h1');
      h1Element.textContent = 'Your scary story is saved!';
      mainElement.appendChild(h1Element);
    }

    function onDelete(event) {
      liElement.remove();
      publishBtn.disabled = false;
    }
  }

}
