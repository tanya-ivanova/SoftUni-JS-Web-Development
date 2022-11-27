import { search } from "../api/data.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";


const searchTemplate = (searchResults, userData, onSubmit, params= '') => html`
<section id="search">
    <h2>Search by Brand</h2>

    <form @submit=${onSubmit} class="search-wrapper cf">
        <input id="#search-input" type="text" name="search" placeholder="Search here..." required .value=${params}>
        <button type="submit">Search</button>
    </form>

    <h3>Results:</h3>

    <div id="search-container">
        <ul class="card-wrapper">
            <!-- Display a li with information about every post (if any)-->
        ${searchResults.length === 0 
        ? html`<h2>There are no results found.</h2>`
        : searchResults.map(sole => html`
            <li class="card">
                <img src=${sole.imageUrl} alt="travis" />
                <p>
                    <strong>Brand: </strong><span class="brand">${sole.brand}</span>
                </p>
                <p>
                    <strong>Model: </strong><span class="model">${sole.model}</span>
                </p>
                <p><strong>Value:</strong><span class="value">${sole.value}</span>$</p>
                ${userData
                ? html `<a class="details-btn" href="/details/${sole._id}">Details</a>`
                : ''}
            </li>`)}
        </ul>        
    </div>
</section>`;


export async function searchView(ctx) {
    const params = ctx.querystring.split('=')[1];

    const userData = getUserData();

    let searchResults = [];

    if(params) {
        searchResults = await search(params);
    }    

    ctx.render(searchTemplate(searchResults, userData, onSubmit, params));

    function onSubmit(event) {
        event.preventDefault();

        const input = document.getElementById('#search-input');

        if (input.value === '') {
            return;
        }
        
        if(input.value) {
            ctx.page.redirect('/search?query=' + input.value);
        }
    }
}