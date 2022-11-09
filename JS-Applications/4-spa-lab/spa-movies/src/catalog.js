const section = document.getElementById('catalogView');
section.remove();

const list = section.querySelector('ul');

export async function showCatalog() {
    document.querySelector('main').replaceChildren(section); 
    
    list.replaceChildren('Loding');

    const res = await fetch('http://localhost:3030/data/movies');
    const movies = await res.json();

    const fragment = document.createDocumentFragment();
    movies.map(createMovieItem).forEach(m => fragment.appendChild(m));
    list.replaceChildren(fragment);
}

function createMovieItem(movie) {
    const li = document.createElement('li');
    li.textContent = movie.title;

    return li;
}