class ArtGallery {
    constructor(creator) {
        this.creator = creator;

        this.possibleArticles = {
            picture: 200,
            photo: 50,
            item: 250 
        };

        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle( articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase();

        if(!this.possibleArticles.hasOwnProperty(articleModel)) {
            throw new Error('This article model is not included in this gallery!');
        }

        let article = this.listOfArticles.find(a => a.articleName === articleName);

        if(article === undefined) {
            article = {
                articleModel, 
                articleName, 
                quantity
            };

            this.listOfArticles.push(article);            

        } else if(article.articleModel !== articleModel) {
            article = {
                articleModel, 
                articleName, 
                quantity
            };

            this.listOfArticles.push(article);            

        } else if(article.articleModel === articleModel) {
            article.quantity += quantity;
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }

    inviteGuest (guestName, personality) {
        let guest = this.guests.find(g => g.guestName === guestName);

        if(guest !== undefined) {
            throw new Error(`${guestName} has already been invited.`);
        }

        let points = 0;

        if(personality === 'Vip') {
            points = 500;
        } else if(personality === 'Middle') {
            points = 250;
        } else {
            points = 50;
        }

        guest = {
            guestName, 
            points, 
            purchaseArticle: 0
        }

        this.guests.push(guest);

        return `You have successfully invited ${guestName}!`;
    }

    buyArticle (articleModel, articleName, guestName) {
        let article = this.listOfArticles.find(a => a.articleName === articleName);

        if(article === undefined || article.articleModel !== articleModel) {
            throw new Error('This article is not found.');
        }

        if(article.quantity === 0) {
            return `The ${articleName} is not available.`;
        }

        let guest = this.guests.find(g => g.guestName === guestName);

        if(guest === undefined) {
            return 'This guest is not invited.';
        }

        let necessaryPoints = this.possibleArticles[articleModel];

        if(guest.points < necessaryPoints) {
            return 'You need to more points to purchase the article.';
        }

        guest.points -= necessaryPoints;
        article.quantity--;
        guest.purchaseArticle++;

        return `${guestName} successfully purchased the article worth ${necessaryPoints} points.`;
    }

    showGalleryInfo (criteria) {
        let output = [];

        if(criteria === 'article') {
            output.push('Articles information:');
            this.listOfArticles.forEach(a => output.push(`${a.articleModel} - ${a.articleName} - ${a.quantity}`));
        } else if(criteria === 'guest') {
            output.push('Guests information:');
            this.guests.forEach(g => output.push(`${g.guestName} - ${g.purchaseArticle}`));
        }

        return output.join('\n');
    }
}

const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));