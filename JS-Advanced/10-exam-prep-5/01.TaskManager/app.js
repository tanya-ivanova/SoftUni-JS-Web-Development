function solve() {
    let taskElement = document.getElementById('task');
    let descriptionElement = document.getElementById('description');
    let dueDateElement = document.getElementById('date');

    let sections = Array.from(document.querySelectorAll('section'));
    let divOpen = sections[1].lastElementChild;
    let divInProgress = sections[2].lastElementChild;
    let divComplete = sections[3].lastElementChild;

    let buttonAdd = document.getElementById('add');
    buttonAdd.addEventListener('click', onAdd);

    function onAdd(event) {
        event.preventDefault();

        if(taskElement.value === '' || descriptionElement.value === '' || dueDateElement.value === '') {
            return;
        }

        let article = document.createElement('article');

        let h3Task = document.createElement('h3');
        h3Task.textContent = taskElement.value;

        let pDescription = document.createElement('p');
        pDescription.textContent = `Description: ${descriptionElement.value}`;

        let pDueDate = document.createElement('p');
        pDueDate.textContent = `Due Date: ${dueDateElement.value}`;

        let divButtons = document.createElement('div');
        divButtons.classList.add('flex');
        let buttonStart = document.createElement('button');
        buttonStart.textContent = 'Start';
        buttonStart.classList.add('green');
        let buttonDelete = document.createElement('button');
        buttonDelete.textContent = 'Delete';
        buttonDelete.classList.add('red');
        let buttonFinish = document.createElement('button');
        buttonFinish.textContent = 'Finish';
        buttonFinish.classList.add('orange');
        divButtons.appendChild(buttonStart);
        divButtons.appendChild(buttonDelete);

        article.appendChild(h3Task);
        article.appendChild(pDescription);
        article.appendChild(pDueDate);
        article.appendChild(divButtons);

        divOpen.appendChild(article);

        taskElement.value = '';
        descriptionElement.value = '';
        dueDateElement.value = '';

        buttonStart.addEventListener('click', onStart);
        buttonDelete.addEventListener('click', onDelete);

        function onStart(event) {
            event.target.remove();
            
            divButtons.appendChild(buttonFinish);

            divInProgress.appendChild(article);

            buttonFinish.addEventListener('click', onFinish);

            function onFinish(event) {
                divButtons.remove();
                divComplete.appendChild(article);
            }
        }

        function onDelete(event) {
            article.remove();
        }
    }
}