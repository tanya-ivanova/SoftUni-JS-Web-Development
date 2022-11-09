function attachEvents() {
    const buttonLoadPosts = document.getElementById('btnLoadPosts');
    const buttonViewPost = document.getElementById('btnViewPost');
    const selectPosts = document.getElementById('posts');
    const h1Title = document.getElementById('post-title');
    const pPostBody = document.getElementById('post-body');
    const ulListComments = document.getElementById('post-comments');

    buttonLoadPosts.addEventListener('click', onLoad);
    buttonViewPost.addEventListener('click', onView);

    async function onLoad(event) {
        try {
            const responseForPosts = await fetch('http://localhost:3030/jsonstore/blog/posts');
            if(responseForPosts.ok === false) {
                throw new Error('Error');
            }

            const dataForPosts = await responseForPosts.json();

            const posts = Object.entries(dataForPosts);
            posts.forEach(el => {
                const optionElement = document.createElement('option');
                optionElement.setAttribute('value', el[1].id);
                optionElement.textContent = el[1].title;
                selectPosts.appendChild(optionElement);
            })

            buttonLoadPosts.removeEventListener('click', onLoad);

        } catch (error) {
            alert(error.message);
        }
    }

    async function onView(event) {
        const postId = selectPosts.value;
        //console.log(postId);
        ulListComments.innerHTML = '';
        
        try {
            const responseForPost = await fetch(`http://localhost:3030/jsonstore/blog/posts/${postId}`);
            if(responseForPost.ok === false) {
                throw new Error('Error');
            }
            
            const reponseComments = await fetch('http://localhost:3030/jsonstore/blog/comments');
            if(reponseComments.ok === false) {
                throw new Error('Error');
            }

            const dataPost = await responseForPost.json();
            const dataComments = await reponseComments.json();
            const comments = Object.entries(dataComments);            

            h1Title.textContent = dataPost.title;
            pPostBody.textContent = dataPost.body;

            const commentsForPost = [];
            comments.forEach(el => {
                if(el[1].postId === postId) {
                    commentsForPost.push(el[1]);
                }
            });
            //console.log(commentsForPost);

            commentsForPost.forEach(el => {
                const liElement = document.createElement('li');
                liElement.setAttribute('id', el.id);
                liElement.textContent = el.text;
                ulListComments.appendChild(liElement);
            })

        } catch (error) {
            alert(error.message);
        }
    }
}

attachEvents();