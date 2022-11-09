import { showDetails } from './details.js';

const section = document.getElementById('homeView');
const divTopicContainer = section.querySelector('div.topic-container');
divTopicContainer.addEventListener('click', showDetails);
const form = section.querySelector('form');
form.addEventListener('submit', onSubmit);
section.querySelector('[name="cancel"]').addEventListener('click', clearForm);

section.remove();

export async function showHome(ev) {
    ev?.preventDefault();

    document.getElementById('main').replaceChildren('Loading');

    divTopicContainer.replaceChildren();

    try {
        const res = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts');
        if(res.ok === false) {
            const error = await res.json();
            throw new Error(error.message);
        }

        const posts = await res.json();
        Object.values(posts).forEach(post => createPostPreview(post));     
        
    } catch (error) {
        alert(error.message);
    }

    document.getElementById('main').replaceChildren(section);
}

async function onSubmit(ev) {
    ev.preventDefault();

    const formData = new FormData(form);
    const title = formData.get('topicName').trim();
    const username = formData.get('username').trim();
    const content = formData.get('postText').trim();

    try {
        if(title === '' || username === '' || content === '') {
            throw new Error('All fields are requried');
        }

        const res = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                title,
                username,
                content,
                dateCreated: new Date()
            })
        });
        if (res.ok === false) {
            const error = await res.json();
            throw new Error(error.message);
        }              

        form.reset();
        showHome();

    } catch (error) {
        alert(error.message);
    }
}

function clearForm() {
    form.reset();
}

function createDivElement(className) {
    const div = document.createElement('div');
    div.classList.add(className);

    return div;
}

function createPostPreview(post) {
    const fragment = document.createDocumentFragment();
    const divTopicNameWrapper = createDivElement('topic-name-wrapper');
    fragment.appendChild(divTopicNameWrapper);
    const divTopicName = createDivElement('topic-name');
    const aElement = document.createElement('a');
    aElement.href = '#';
    aElement.classList.add('normal');
    aElement.setAttribute('id', post._id)    
    const h2Element = document.createElement('h2');
    h2Element.textContent = post.title;    
    aElement.appendChild(h2Element);
    const divColumns = createDivElement('columns');
    const div = document.createElement('div');
    const pDate = document.createElement('p');
    pDate.textContent = 'Date: ';
    const time = document.createElement('time');
    time.textContent = post.dateCreated;
    pDate.appendChild(time);
    const divNickName = createDivElement('nick-name');
    const pUsername = document.createElement('p');
    pUsername.textContent = 'Username: ';
    const span = document.createElement('span');
    span.textContent = post.username;
    pUsername.appendChild(span);
    divNickName.appendChild(pUsername);
    div.appendChild(pDate);
    div.appendChild(divNickName);
    divColumns.appendChild(div);
    divTopicName.appendChild(aElement);
    divTopicName.appendChild(divColumns);
    divTopicNameWrapper.appendChild(divTopicName);
    divTopicContainer.appendChild(fragment);
}

