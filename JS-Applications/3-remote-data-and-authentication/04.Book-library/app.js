const loadBtn = document.getElementById('loadBooks');
const tbodyElement = document.querySelector('tbody');
const h3FormTitle = document.querySelector('form h3');
const title = document.querySelector('[name="title"]');
const author = document.querySelector('[name="author"]');
const submitBtn = document.querySelector('form button');

loadBtn.addEventListener('click', loadBooks);
submitBtn.addEventListener('click', createBook);

async function loadBooks(event) {
    tbodyElement.innerHTML = '';

    try {
        const response = await fetch('http://localhost:3030/jsonstore/collections/books');
        if(response.ok === false) {
            const err = await response.json();
            throw new Error(err.message);
        }

        const data = await response.json();
        Object.entries(data).forEach(book => {
            const id = book[0];            

            const trElement = document.createElement('tr');

            const tdAuthor = document.createElement('td');
            tdAuthor.textContent = book[1].author;

            const tdTitle = document.createElement('td');
            tdTitle.textContent = book[1].title;

            const tdButtons = document.createElement('td');
            const editBtn = document.createElement('button');
            editBtn.textContent = 'Edit';
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            tdButtons.appendChild(editBtn);
            tdButtons.appendChild(deleteBtn);
            
            trElement.appendChild(tdAuthor);
            trElement.appendChild(tdTitle);
            trElement.appendChild(tdButtons);
            tbodyElement.appendChild(trElement);

            editBtn.addEventListener('click', editBook);
            deleteBtn.addEventListener('click', onDelete);

            async function editBook(event) {
                h3FormTitle.textContent = 'Edit FORM';
                title.value = book[1].title;
                author.value = book[1].author;
                submitBtn.remove();
                const saveBtn = document.createElement('button');
                saveBtn.textContent = 'Save';
                document.querySelector('form').appendChild(saveBtn);

                saveBtn.addEventListener('click', onSave);                

                async function onSave(event) {
                    event.preventDefault();

                    if(author.value === '' || title.value === '') {
                        return;
                    }

                    const editedBook = {
                        author: author.value,
                        title: title.value
                    }                                      
                  
                    try {
                        const responsePut = await fetch(`http://localhost:3030/jsonstore/collections/books/${id}`, {
                            method: 'PUT',
                            headers: {
                                'Content-type': 'application/json'
                            },
                            body: JSON.stringify(editedBook)
                        });
                        if(responsePut.ok === false) {
                            const err = await responsePut.json();
                            throw new Error(err.message);
                        }
                    } catch (error) {
                        alert(error.message);
                    }

                    h3FormTitle.textContent = 'FORM';                    
                    saveBtn.remove();
                    document.querySelector('form').appendChild(submitBtn);                  

                    author.value = '';
                    title.value = '';

                    loadBooks();
                    
                }                
            }

            async function onDelete(event) {               

                try {
                    const responseDelete = await fetch(`http://localhost:3030/jsonstore/collections/books/${id}`, {
                        method: 'DELETE'
                    });
                    if(responseDelete.ok === false) {
                        const err = await responseDelete.json();
                        throw new Error(err.message);
                    }

                } catch (error) {
                    alert(error.message);
                }

                loadBooks();
            }
        });

    } catch (error) {
        alert(error.message);
    }
}

async function createBook(event) {
    event.preventDefault();

    if(title.value === '' || author.value === '') {
        return;
    }

    const book = {
        author: author.value,
        title: title.value
    }    

    try {
        const response = await fetch('http://localhost:3030/jsonstore/collections/books', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(book)
        });
        if(response.ok === false) {
            const err = await response.json();
            throw new Error(err.message);
        }
    } catch (error) {
        alert(error.message);
    }

    author.value = '';
    title.value = '';

    loadBooks();
}
