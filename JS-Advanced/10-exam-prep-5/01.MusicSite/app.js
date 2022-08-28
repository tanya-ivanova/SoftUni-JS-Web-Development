window.addEventListener('load', solve);

function solve() {
    let genreElement = document.getElementById('genre');
    let nameElement = document.getElementById('name');
    let authorElement = document.getElementById('author');
    let dateElement = document.getElementById('date');

    let divAllHitsContainer = document.querySelector('.all-hits-container');
    let divSavedContainer = document.querySelector('.saved-container');

    let totalLikesElement = document.querySelector('#total-likes p');

    let buttonAdd = document.getElementById('add-btn');

    buttonAdd.addEventListener('click', onAdd);

    function onAdd(event) {
        event.preventDefault();

        if(genreElement.value === '' || nameElement.value === '' || authorElement.value === '' || dateElement.value === '') {
            return;
        }

        let divHitsInfo = document.createElement('div');
        divHitsInfo.classList.add('hits-info');

        let imgElement = document.createElement('img');
        imgElement.src = './static/img/img.png';

        let h2Genre = document.createElement('h2');
        h2Genre.textContent = `Genre: ${genreElement.value}`;

        let h2Name = document.createElement('h2');
        h2Name.textContent = `Name: ${nameElement.value}`;

        let h2Author = document.createElement('h2');
        h2Author.textContent = `Author: ${authorElement.value}`;

        let h3Date = document.createElement('h3');
        h3Date.textContent = `Date: ${dateElement.value}`;

        let buttonSave = document.createElement('button');
        buttonSave.textContent = 'Save song';
        buttonSave.classList.add('save-btn');

        let buttonLike = document.createElement('button');
        buttonLike.textContent = 'Like song';
        buttonLike.classList.add('like-btn');

        let buttonDelete = document.createElement('button');
        buttonDelete.textContent = 'Delete';
        buttonDelete.classList.add('delete-btn');

        divHitsInfo.appendChild(imgElement);
        divHitsInfo.appendChild(h2Genre);
        divHitsInfo.appendChild(h2Name);
        divHitsInfo.appendChild(h2Author);
        divHitsInfo.appendChild(h3Date);
        divHitsInfo.appendChild(buttonSave);
        divHitsInfo.appendChild(buttonLike);
        divHitsInfo.appendChild(buttonDelete);

        divAllHitsContainer.appendChild(divHitsInfo);

        genreElement.value = '';
        nameElement.value = '';
        authorElement.value = '';
        dateElement.value = '';

        buttonLike.addEventListener('click', onLike);
        buttonSave.addEventListener('click', onSave);
        buttonDelete.addEventListener('click', onDelete);

        function onLike(event) {
            let totalLikes = Number(totalLikesElement.textContent.split(': ')[1]);
            totalLikes++;
            totalLikesElement.textContent = `Total Likes: ${totalLikes}`;

            buttonLike.disabled = true;
        }

        function onSave(event) {
            divSavedContainer.appendChild(divHitsInfo);
            buttonSave.remove();
            buttonLike.remove();
        }

        function onDelete(event) {
            divHitsInfo.remove();
        }

    }

}