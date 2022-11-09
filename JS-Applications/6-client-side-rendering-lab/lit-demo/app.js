import {html, render} from '../node_modules/lit-html/lit-html.js';
import {styleMap} from '../node_modules/lit-html/directives/style-map.js';
import {repeat} from '../node_modules/lit-html/directives/repeat.js';
import {data} from './data.js';
import {articleTemplate} from './views/article.js'
import { formTemplate } from './views/form.js';

const greetingTemplate = (name) => html`
<h2 style=${styleMap({
    color: 'blue'
})}>Hello there, ${name}.</h2>
<input type="text" ?disabled=${false} .value=${'asdf'}/>
<textarea .value=${'asdf'}></textarea>`;

const timerTemplate = (time) => html`<h3>${time.hours}:${time.minutes}:${time.seconds}</h3>`;

setInterval(start, 1000);

const main = document.querySelector('main');
const header = document.querySelector('header');

function start() {         
    
    updateTimer();

    update();

    // const header = document.querySelector('header');
    // const templateResult = greetingTemplate('Peter');
    // render(templateResult, header);
}

function update() {  
    render(formTemplate(onSubmit), header);    
    //render(data.map(articleTemplate.bind(null, onDelete)), main);
    render(repeat(data, a => a.id, articleTemplate.bind(null, onDelete)), main);
}

function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const article = {
        id: 'aaa' + (Math.random() * 9999 | 0),
        title: formData.get('title'),
        content: formData.get('content'),
        author: formData.get('author'),
        class: 'green'
    };
    event.target.reset();
    data.push(article);

    update();
}

function onDelete(index) {
    data.splice(index, 1);

    update();
}

function updateTimer() {
    const now = new Date();

    const time = {
        hours: now.getHours(),
        minutes: ('0' + now.getMinutes()).slice(-2),
        seconds: ('0' + now.getSeconds()).slice(-2)
    }

    render(timerTemplate(time), document.getElementById('timer'));
}

