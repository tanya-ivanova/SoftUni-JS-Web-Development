const section = document.getElementById('home-page');
const welcomeMessage = document.getElementById('welcome-msg');
const logoutBtn = document.getElementById('logout');
const loginBtn = document.getElementById('login');
const registerBtn = document.getElementById('register');
const sectionAddMovieBtn = document.getElementById('add-movie-button');
const sectionMovieList = document.getElementById('movie');
const ulMovieListElement = document.getElementById('movies-list');

logoutBtn.addEventListener('click', onLogout);

export function showHome(ev) {
    ev?.preventDefault();
    document.querySelectorAll('section').forEach(s => s.style.display = 'none');
    section.style.display = 'block';

    showNav();

    showMovies();
}

function showNav() {
    const user = JSON.parse(sessionStorage.getItem('user'));
    if(user !== null){
        welcomeMessage.textContent = `Welcome, ${user.email}`;
        welcomeMessage.style.display = 'block';
        logoutBtn.style.display = 'block';
        loginBtn.style.display = 'none';
        registerBtn.style.display = 'none';
        sectionAddMovieBtn.style.display = 'block';
    } else {
        welcomeMessage.style.display = 'none';
        logoutBtn.style.display = 'none';
        loginBtn.style.display = 'block';
        registerBtn.style.display = 'block';
        sectionAddMovieBtn.style.display = 'none';
    }
}

function onLogout(ev) {
    ev.preventDefault();

    const accessToken = JSON.parse(sessionStorage.getItem('user')).accessToken;

    fetch('http://localhost:3030/users/logout', {
        headers: {
            'X-Authorization': accessToken
        }
    });

    sessionStorage.removeItem('user');
    showHome();
}

async function showMovies() {
    sectionMovieList.style.display = 'block';
    ulMovieListElement.replaceChildren();

    try {
        const res = await fetch('http://localhost:3030/data/movies');
        if(res.ok === false) {
            const error = await res.json();
            throw new Element(error.message);
        }

        const movies = await res.json();
        movies.forEach(movie => createMovie(movie));

    } catch (error) {
        alert(error.message);
    }

    const detailsButtons = document.querySelectorAll('.details-btn');
    const user = JSON.parse(sessionStorage.getItem('user'));
    if(user === null) {
        detailsButtons.forEach(btn => btn.style.display = 'none');
    } else {
        detailsButtons.forEach(btn => btn.style.display = 'block');
    }

}

function createMovie(movie) {
    const fragment = document.createDocumentFragment();
    const liElement = document.createElement('li');    
    fragment.appendChild(liElement);
    const divContainer = document.createElement('div');
    divContainer.classList.add('container');
    const divInner = document.createElement('div');
    divInner.classList.add('row');
    divInner.classList.add('bg-light');
    divInner.classList.add('text-dark');
    const divImg = document.createElement('div');
    divImg.classList.add('col-md-8');
    const img = document.createElement('img');
    img.classList.add('img-thumbnail');
    img.src = movie.img;
    img.alt = 'Movie';
    divImg.appendChild(img);
    const h1 = document.createElement('h1');
    h1.textContent = movie.title;
    divInner.appendChild(divImg);
    divInner.appendChild(h1);
    divContainer.appendChild(divInner);
    liElement.appendChild(divContainer);

    const divBtn = document.createElement('div');
    divBtn.classList.add('col-md-4');
    divBtn.classList.add('text-center');
    const detailsBtn = document.createElement('a');
    detailsBtn.href = '#';
    detailsBtn.classList.add('details-btn');    
    detailsBtn.textContent = 'Details';
    detailsBtn.id = movie._id;
    detailsBtn.setAttribute('data-ownerid', movie._ownerId);
    divBtn.appendChild(detailsBtn);
    liElement.appendChild(divBtn);

    ulMovieListElement.appendChild(fragment);
}