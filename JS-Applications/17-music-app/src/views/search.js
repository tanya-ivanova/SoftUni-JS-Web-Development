import { search } from "../api/data.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";


const searchTemplate = (query = '', searchedResults, userData, onSearch) => html`
<section id="searchPage">
    <h1>Search by Name</h1>

    <div class="search">
        <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name" .value=${query}>
        <button @click=${onSearch} class="button-list">Search</button>
    </div>

    <h2>Results:</h2>
    
    <!--Show after click Search button-->
    <div class="search-result">
        
        ${searchedResults.length === 0
        ? html`<p class="no-result">No result.</p>`
        : searchedResults.map(album => html`
        <div class="card-box">
            <img src=${album.imgUrl}>
            <div>
                <div class="text-center">
                    <p class="name">Name: ${album.name}</p>
                    <p class="artist">Artist: ${album.artist}</p>
                    <p class="genre">Genre: ${album.genre}</p>
                    <p class="price">Price: $${album.price}</p>
                    <p class="date">Release Date: ${album.releaseDate}</p>
                </div>
                ${userData
                ? html`
                <div class="btn-group">
                    <a href="/details/${album._id}" id="details">Details</a>
                </div>`
                : ''}
            </div>
        </div>`)}        
    </div>
</section>`;

export async function searchView(ctx) {
    const query = ctx.querystring.split('=')[1];
    const userData = getUserData();

    let searchedResults = [];
    if(query) {
        searchedResults = await search(query);
    }

    ctx.render(searchTemplate(query, searchedResults, userData, onSearch));

    function onSearch(event) {
        event.preventDefault();

        const input = document.getElementById('search-input');
        if(input.value === '') {
            alert('Please enter the search criteria in the input field');
        }

        if(input.value) {
            ctx.page.redirect('/search?query=' + input.value);
        }
    }
}