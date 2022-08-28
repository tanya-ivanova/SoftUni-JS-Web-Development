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

        divOpen.appendChild(createArticle());

        taskElement.value = '';
        descriptionElement.value = '';
        dueDateElement.value = '';  
        
        let buttonStart = Array.from(document.querySelectorAll('button.green'));
        let buttonDelete = Array.from(document.querySelectorAll('button.red'));    
        buttonStart.forEach(b => b.addEventListener('click', onStart));
        buttonDelete.forEach(b => b.addEventListener('click', onDelete));
       
    }

    function onStart(event) {
        
        let art = event.target.parentElement.parentElement;
        let div = event.target.parentElement;
        
        event.target.remove();                

        let buttonFinish = document.createElement('button');
        buttonFinish.textContent = 'Finish';
        buttonFinish.classList.add('orange');
        div.appendChild(buttonFinish);

        divInProgress.appendChild(art);

        let finishButtons = Array.from(document.querySelectorAll('button.orange'));
        finishButtons.forEach(b => b.addEventListener('click', onFinish));
    }

    function onDelete(event) {
        event.target.parentElement.parentElement.remove();
    }

    function onFinish(event) {
        let art = event.target.parentElement.parentElement;
        let div = event.target.parentElement;

        div.remove();

        divComplete.appendChild(art);
    }

    function createArticle() {
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
        divButtons.appendChild(buttonStart);
        divButtons.appendChild(buttonDelete);

        article.appendChild(h3Task);
        article.appendChild(pDescription);
        article.appendChild(pDueDate);
        article.appendChild(divButtons);

        return article;
    }
}