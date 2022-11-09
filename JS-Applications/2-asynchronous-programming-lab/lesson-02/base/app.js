function solve() {
    let mainElement = document.querySelector('main');
    mainElement.innerHTML = '';
    
    fetch('http://localhost:3030/jsonstore/cookbook/recipes')
        .then(handleResponse)
        .then(handleData)
        .catch(error => alert(error.message));
    
    function handleResponse(response) {
        if(response.ok === false) {
            throw new Error(`${response.status} ${response.statusText}`)
        }
        return response.json();
    } 
    
    function handleData(data) {
        let dataAsArray = Object.entries(data);
        console.log(dataAsArray);

        dataAsArray.forEach(el => {
            const article = document.createElement('article');
            article.classList.add('preview');

            const divTitle = document.createElement('div');
            divTitle.classList.add('title');
            const h2 = document.createElement('h2');
            h2.textContent = `${el[1].name}`;
            divTitle.appendChild(h2);

            const divSmall = document.createElement('div');
            divSmall.classList.add('small');
            const img = document.createElement('img');
            img.src = `${el[1].img}`;
            divSmall.appendChild(img);

            article.appendChild(divTitle);
            article.appendChild(divSmall);
            mainElement.appendChild(article);

            article.addEventListener('click', displaySingleRecipe);

            function displaySingleRecipe() {
                mainElement.innerHTML = '';

                fetch(`http://localhost:3030/jsonstore/cookbook/details/${el[0]}`)
                    .then(res => {
                        if(res.ok === false) {
                            throw new Error(`${res.status} ${res.statusText}`)
                        }
                        return res.json();
                    })
                    .then(dataForSingleRecipe => {
                        const art = document.createElement('article');
                        const title = document.createElement('h2');
                        title.textContent = dataForSingleRecipe.name;

                        const divBand = document.createElement('div');
                        divBand.classList.add('band');

                        const divThumb = document.createElement('div');
                        divThumb.classList.add('thumb');
                        const image = document.createElement('img');
                        image.src = dataForSingleRecipe.img;
                        divThumb.appendChild(image);
                        
                        const divIngredients = document.createElement('div');
                        divIngredients.classList.add('ingredients');
                        const h3Ingredients = document.createElement('h3');
                        h3Ingredients.textContent = 'Ingredients:';
                        const ulIngredients = document.createElement('ul');
                        dataForSingleRecipe.ingredients.forEach(ing => {
                            const liElement = document.createElement('li');
                            liElement.textContent = ing;
                            ulIngredients.appendChild(liElement);
                        });
                        divIngredients.appendChild(h3Ingredients);
                        divIngredients.appendChild(ulIngredients);

                        divBand.appendChild(divThumb);
                        divBand.appendChild(divIngredients);

                        const divDescription = document.createElement('div');
                        divDescription.classList.add('description');
                        const h3Preparation = document.createElement('h3');
                        h3Preparation.textContent = 'Prepaaration:';
                        divDescription.appendChild(h3Preparation);
                        dataForSingleRecipe.steps.forEach(step => {
                            const pElement = document.createElement('p');
                            pElement.textContent = step;
                            divDescription.appendChild(pElement);
                        });

                        art.appendChild(title);
                        art.appendChild(divBand);
                        art.appendChild(divDescription);
                        mainElement.appendChild(art);
                    })
                    .catch(error => alert(error.message));
            }
        });
        
    }

}