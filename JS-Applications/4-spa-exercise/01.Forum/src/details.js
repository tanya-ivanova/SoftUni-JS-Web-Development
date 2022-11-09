const section = document.getElementById('detailsView');

const nameElement = document.querySelector('div.header span');
const timeElement = document.querySelector('div.header time');
const contentElement = document.querySelector('p.post-content');
const titleElement = document.querySelector('div.theme-name h2');
const divComments = document.getElementById('user-comment');

const form = section.querySelector('form');
form.addEventListener('submit', onSubmit);

section.remove();

export function showDetails(ev) {
    let target = ev.target;
    if(target.tagName === 'H2') {
        target = target.parentElement;        
    }
    if(target.tagName === 'A') {
        ev.preventDefault();

        const postId = target.id;

        showPost(postId);
    }    
}

async function showPost(postId) {
    document.getElementById('main').replaceChildren('Loading');
    divComments.replaceChildren();

    try {
        const [res, commentsRes] = await Promise.all([
            fetch(`http://localhost:3030/jsonstore/collections/myboard/posts/${postId}`),
            fetch('http://localhost:3030/jsonstore/collections/myboard/comments')
        ]);
        
        if(res.ok === false) {
            const error = await res.json();
            throw new Error(error.message);
        }

        if(commentsRes.ok === false) {
            const error = await commentsRes.json();
            throw new Error(error.message);
        }

        const [post, comments] = await Promise.all([
            res.json(),
            commentsRes.json()
        ]);
        
        Object.values(comments)
        .filter(c => c.postId === postId)
        .forEach(c => createCommentElement(c));

        form.id = postId;

        nameElement.textContent = post.username;
        timeElement.textContent = post.dateCreated;
        contentElement.textContent = post.content;
        titleElement.textContent = post.title;

    } catch (error) {
        alert(error.message);
    }

    document.getElementById('main').replaceChildren(section);     
}

async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(form);
    const username = formData.get('username').trim();
    const content = formData.get('postText').trim();
    const postId = form.id;

    try {
        if(username === '' || content === '') {
            throw new Error('All fields are required!');
        }         

        const res = await fetch('http://localhost:3030/jsonstore/collections/myboard/comments', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                username,
                content,
                postId,
                dateCreated: new Date()
            })
        });
        if(res.ok === false) {
            const error = await res.json();
            throw new Error(error.message);
        }

        form.reset();
        showPost(postId);

    } catch (error) {
        alert(error.message);
    }    
}

function createCommentElement(comment) {
    const fragment = document.createDocumentFragment();
    const divTopicNameWrapper = document.createElement('div');
    divTopicNameWrapper.classList.add('topic-name-wrapper');
    fragment.appendChild(divTopicNameWrapper);
    const divTopicName = document.createElement('div');
    divTopicName.classList.add('topic-name');
    const pNameAndTime = document.createElement('p');    
    const strong = document.createElement('strong');
    strong.textContent = `${comment.username} commented on `;
    const time = document.createElement('time');
    time.textContent = comment.dateCreated;
    pNameAndTime.appendChild(strong);
    pNameAndTime.appendChild(time);
    const divPostContent = document.createElement('div');
    divPostContent.classList.add('post-content');
    const pContent = document.createElement('p');
    pContent.textContent = comment.content;
    divPostContent.appendChild(pContent);
    divTopicName.appendChild(pNameAndTime);
    divTopicName.appendChild(divPostContent);
    divTopicNameWrapper.appendChild(divTopicName);
    divComments.appendChild(fragment);
}