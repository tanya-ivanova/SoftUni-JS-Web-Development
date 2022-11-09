window.addEventListener('load', solve);

function solve() {
    const genreElement = document.getElementById('genre');
    const nameElement = document.getElementById('name');
    const authorElement = document.getElementById('author');
    const dateElement = document.getElementById('date');
    const addBtn = document.getElementById('add-btn');
    const allHitsElement = document.querySelector('div.all-hits-container');
    const savedHitsElement = document.querySelector('div.saved-container');
    const likesElement = document.querySelector('div.likes p');
    let totalLikes = 0;

    addBtn.addEventListener('click', onAdd);

    function onAdd(event) {
        event.preventDefault();

        if(genreElement.value === '' || nameElement.value === ''
        || authorElement.value === '' || dateElement.value === '') {
            return;
        }

        const divHitsInfo = document.createElement('div');
        divHitsInfo.classList.add('hits-info');
        const img = document.createElement('img');
        img.src = "./static/img/img.png";
        const genreH2 = document.createElement('h2');
        genreH2.textContent = `Genre: ${genreElement.value}`;
        const nameH2 = document.createElement('h2');
        nameH2.textContent = `Name: ${nameElement.value}`;
        const authorH2 = document.createElement('h2');
        authorH2.textContent = `Author: ${authorElement.value}`;
        const dateH3 = document.createElement('h3');
        dateH3.textContent = `Date: ${dateElement.value}`;
        const saveBtn = document.createElement('button');
        saveBtn.classList.add('save-btn');
        saveBtn.textContent = 'Save song';
        const likeBtn = document.createElement('button');
        likeBtn.classList.add('like-btn');
        likeBtn.textContent = 'Like song';
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Delete';
        divHitsInfo.appendChild(img);
        divHitsInfo.appendChild(genreH2);
        divHitsInfo.appendChild(nameH2);
        divHitsInfo.appendChild(authorH2);
        divHitsInfo.appendChild(dateH3);
        divHitsInfo.appendChild(saveBtn);
        divHitsInfo.appendChild(likeBtn);
        divHitsInfo.appendChild(deleteBtn);
        allHitsElement.appendChild(divHitsInfo);

        genreElement.value = '';
        nameElement.value = '';
        authorElement.value = '';
        dateElement.value = '';

        likeBtn.addEventListener('click', onLike);
        saveBtn.addEventListener('click', onSave);
        deleteBtn.addEventListener('click', onDelete);

        function onLike(event) {
            totalLikes++;
            likesElement.textContent = `Total Likes: ${totalLikes}`;
            likeBtn.disabled = true;
        }

        function onSave(event) {
            saveBtn.remove();
            likeBtn.remove();
            savedHitsElement.appendChild(divHitsInfo);
        }

        function onDelete(event) {
            divHitsInfo.remove();
        }
    }
}