function solve() {
    let buttonAdd = document.getElementById('add');
    let inputTask = document.getElementById('task');
    let textareaDescription = document.getElementById('description');
    let inputDueDate = document.getElementById('date');
    let [_, openSection, progressSection, completeSection] = Array.from(document.getElementsByTagName('section')).map(e => e.children[1]);
        
    buttonAdd.addEventListener('click', add);       

    function add(event) {
        event.preventDefault();
        
        let article = document.createElement('article');
        
        article.appendChild(createElement('h3', inputTask.value));
        article.appendChild(createElement('p', `Description: ${textareaDescription.value}`));
        article.appendChild(createElement('p', `Due Date: ${inputDueDate.value}`));
        let div = createElement('div', '', 'flex');
        article.appendChild(div);
        let buttonStart = createElement('button', 'Start', 'green');
        div.appendChild(buttonStart);
        let buttonDelete = createElement('button', 'Delete', 'red');
        div.appendChild(buttonDelete);
        let buttonFinish = createElement('button', 'Finish', 'orange');

        openSection.appendChild(article);
        
        buttonStart.addEventListener('click', onStart);
        buttonDelete.addEventListener('click', onDelete);
        buttonFinish.addEventListener('click', onFinish);

        inputTask.value = '';         
        textareaDescription.value = '';
        inputDueDate.value = '';

        function onStart() {
            buttonStart.remove();
            div.appendChild(buttonFinish);
            progressSection.appendChild(article);            
        }

        function onDelete() {
            article.remove();
        }
        
        function onFinish() {
            div.remove();
            completeSection.appendChild(article);
        }
    }

    function createElement(type, content, className) {
        let element = document.createElement(type);
        element.textContent = content;
        if(className) {
            element.className = className;
        }
        return element;
    }
}
