function attachEvents() {
    const list = document.getElementById('phonebook');
    const loadBtn = document.getElementById('btnLoad');
    const createBtn = document.getElementById('btnCreate');

    loadBtn.addEventListener('click', onLoad);
    createBtn.addEventListener('click', onCreate);

    async function onLoad(event) {
        try {
            const response = await fetch('http://localhost:3030/jsonstore/phonebook');
            if(response.ok === false) {
                const err = await response.json();
                throw new Error(err.message);
            }

            const data = await response.json();

            list.innerHTML = '';
            
            Object.values(data).forEach(el => {
                const id = el._id;

                const liElement = document.createElement('li');
                liElement.textContent = `${el.person}: ${el.phone}`;

                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Delete';

                liElement.appendChild(deleteBtn);

                list.appendChild(liElement);

                deleteBtn.addEventListener('click', onDelete);

                async function onDelete(event) {
                    liElement.remove();

                    try {
                        const res = await fetch(`http://localhost:3030/jsonstore/phonebook/${id}`, {
                            method: 'DELETE'
                        });
                        if(res.ok === false) {
                            const err = await res.json();
                            throw new Error(err.message);
                        }
                    } catch (error) {
                        alert(error.message);
                    }
                }
            })


        } catch (error) {
            alert(error.message);
        }
    }

    async function onCreate(event) {
        try {
            const person = document.getElementById('person');
            const phone = document.getElementById('phone');

            const contact = {
                person: person.value,
                phone: phone.value
            }

            person.value ='';
            phone.value = '';

            const response = await fetch('http://localhost:3030/jsonstore/phonebook', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(contact)
            });
            if(response.ok === false) {
                const err = await response.json();
                throw new Error(err.message);
            }

            onLoad();

        } catch (error) {
            alert(error.message);
        }
    }
}

attachEvents();