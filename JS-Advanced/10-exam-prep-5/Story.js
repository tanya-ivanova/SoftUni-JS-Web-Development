class Story {
    #likes;
    #comments;

    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this.#comments = [];
        this.#likes = [];
    }

    get likes() {
        if(this.#likes.length === 0) {
            return `${this.title} has 0 likes`;
        }

        if(this.#likes.length === 1) {
            return `${this.#likes[0]} likes this story!`;
        }

        return `${this.#likes[0]} and ${this.#likes.length - 1} others like this story!`;
    }

    like(username) {
        if(this.#likes.includes(username)) {
            throw new Error("You can't like the same story twice!");
        }

        if(username === this.creator) {
            throw new Error("You can't like your own story!");
        }

        this.#likes.push(username);

        return `${username} liked ${this.title}!`;
    }

    dislike(username) {
        if(!this.#likes.includes(username)) {
            throw new Error("You can't dislike this story!");
        }

        let index = this.#likes.indexOf(username);
        this.#likes.splice(index, 1);

        return `${username} disliked ${this.title}`;
    }

    comment(username, content, id) {
        let comment = this.#comments.find(c => c.Id === id);

        if(id === undefined || comment === undefined) {
            comment = {
                Id: this.#comments.length + 1, 
                Username: username, 
                Content: content, 
                Replies: []
            }

            this.#comments.push(comment);

            return `${username} commented on ${this.title}`;
        }

        let reply = {
            Id: Number(`${id}.${comment.Replies.length + 1}`), 
            Username: username, 
            Content: content
        }

        comment.Replies.push(reply);

        return 'You replied successfully';
    }

    toString(sortingType) {
        if(sortingType === 'asc') {
            this.#comments.sort((a, b) => a.Id - b.Id);

            this.#comments.forEach(c => {
                c.Replies.sort((a, b) => a.Id - b.Id);
            });
        } else if(sortingType === 'desc') {
            this.#comments.sort((a, b) => b.Id - a.Id);

            this.#comments.forEach(c => {
                c.Replies.sort((a, b) => b.Id - a.Id);
            });
        } else if(sortingType === 'username') {
            this.#comments.sort((a, b) => a.Username.localeCompare(b.Username));           

            this.#comments.forEach(c => {
                c.Replies.sort((a, b) => a.Username.localeCompare(b.Username));
            });
        }

        let output = [`Title: ${this.title}`];
        output.push(`Creator: ${this.creator}`);
        output.push(`Likes: ${this.#likes.length}`);
        output.push('Comments:');
        
        if(this.#comments.length > 0) {
            this.#comments.forEach(c => {
                output.push(`-- ${c.Id}. ${c.Username}: ${c.Content}`);

                if(c.Replies.length > 0) {
                    c.Replies.forEach(r => output.push(`--- ${r.Id}. ${r.Username}: ${r.Content}`));
                }
            })
        }

        return output.join('\n');
    }
}

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));