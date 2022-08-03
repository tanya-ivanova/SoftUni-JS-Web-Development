function getArticleGenerator(articles) {    

    function showNext() {
        if(articles.length > 0) {
            let article = document.createElement('article');
            let divContent = document.getElementById('content');
            divContent.appendChild(article);

            let text = articles[0];
            article.textContent = text;
            articles.shift();
        }
    }

    return showNext;
}
