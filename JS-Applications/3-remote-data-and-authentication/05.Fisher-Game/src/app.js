const fieldsetMain = document.getElementById('main');
fieldsetMain.innerHTML = '';
fieldsetMain.style.display = 'none';
const pElement = document.createElement('p');
pElement.textContent = 'Click to load catches';
document.getElementById('home-view').prepend(pElement);

const loadBtn = document.querySelector('aside button.load');
const addBtn = document.querySelector('#addForm button');

const welcomeMessage = document.querySelector('header nav p');
const logoutBtn = document.getElementById('logout');

const token = sessionStorage.getItem('accessToken');
const emailUser = sessionStorage.getItem('email');
const id = sessionStorage.getItem('id');

if(token !== null) {    
    welcomeMessage.textContent = emailUser;
    addBtn.disabled = false;
} else {
    logoutBtn.style.display = 'none';
    addBtn.disabled = true;
}

loadBtn.addEventListener('click', onLoad);
addBtn.addEventListener('click', onAdd);
logoutBtn.addEventListener('click', onLogout);

async function onLoad(event) {
    fieldsetMain.innerHTML = '';
    const legendElement = document.createElement('legend');
    legendElement.textContent = 'Catches';
    const divCatches = document.createElement('div');
    divCatches.classList.add('catches');        
    fieldsetMain.appendChild(legendElement);
    fieldsetMain.appendChild(divCatches);
    fieldsetMain.style.display = 'inline-table';

    try {
        const response = await fetch('http://localhost:3030/data/catches');
        if(response.ok === false) {
            const err = await response.json();
            throw new Error(err.message);
        }

        const data = await response.json();
        
        data.forEach(el => {
            const div = document.createElement('div');
            div.classList.add('catch');

            const labelAngler = document.createElement('label');
            labelAngler.textContent = 'Angler';
            const inputAngler = document.createElement('input');
            inputAngler.value = el.angler;
            inputAngler.setAttribute('type', 'text');
            inputAngler.setAttribute('class', 'angler');

            const labelWeight = document.createElement('label');
            labelWeight.textContent = 'Weight';
            const inputWeight = document.createElement('input');
            inputWeight.value = el.weight;
            inputWeight.setAttribute('type', 'text');
            inputWeight.setAttribute('class', 'weight');

            const labelSpecies = document.createElement('label');
            labelSpecies.textContent = 'Species';
            const inputSpecies = document.createElement('input');
            inputSpecies.value = el.species;
            inputSpecies.setAttribute('type', 'text');
            inputSpecies.setAttribute('class', 'species');

            const labelLocation = document.createElement('label');
            labelLocation.textContent = 'Location';
            const inputLocation = document.createElement('input');
            inputLocation.value = el.location;
            inputLocation.setAttribute('type', 'text');
            inputLocation.setAttribute('class', 'Location');

            const labelBait = document.createElement('label');
            labelBait.textContent = 'Bait';
            const inputBait = document.createElement('input');
            inputBait.value = el.bait;
            inputBait.setAttribute('type', 'text');
            inputBait.setAttribute('class', 'bait');

            const labelCaptureTime = document.createElement('label');
            labelCaptureTime.textContent = 'Capture Time';
            const inputCaptureTime = document.createElement('input');
            inputCaptureTime.value = el.captureTime;
            inputCaptureTime.setAttribute('type', 'number');
            inputCaptureTime.setAttribute('class', 'captureTime');

            const updateBtn = document.createElement('button');
            updateBtn.textContent = 'Update';
            updateBtn.classList.add('update');
            updateBtn.setAttribute('data-id', el._id);

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.classList.add('delete');
            deleteBtn.setAttribute('data-id', el._id);

            div.appendChild(labelAngler);
            div.appendChild(inputAngler);
            div.appendChild(labelWeight);
            div.appendChild(inputWeight);
            div.appendChild(labelSpecies);
            div.appendChild(inputSpecies);
            div.appendChild(labelLocation);
            div.appendChild(inputLocation);
            div.appendChild(labelBait);
            div.appendChild(inputBait);
            div.appendChild(labelCaptureTime);
            div.appendChild(inputCaptureTime);
            div.appendChild(updateBtn);
            div.appendChild(deleteBtn);
            divCatches.appendChild(div);

            if(id !== el._ownerId) {
                updateBtn.disabled = true;
                deleteBtn.disabled = true;
            } else {
                updateBtn.disabled = false;
                deleteBtn.disabled = false;
            }

            const catchId = el._id;

            updateBtn.addEventListener('click', onUpdate);
            deleteBtn.addEventListener('click', onDelete);

            async function onUpdate(event) {
                const updatedCatch = {
                    angler: inputAngler.value, 
                    weight: inputWeight.value, 
                    species: inputSpecies.value, 
                    location: inputLocation.value, 
                    bait: inputBait.value, 
                    captureTime: inputCaptureTime.value
                };

                try {
                    const responseUpdate = await fetch(`http://localhost:3030/data/catches/${catchId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-type': 'application/json',
                        'X-Authorization': token
                    },
                    body:JSON.stringify(updatedCatch)
                    });
                    if(responseUpdate.ok === false) {
                        const error = await responseUpdate.json();
                        throw new Error(error.message);
                    }

                } catch (error) {
                    alert(error.message);
                }
            }

            async function onDelete(event) {
                div.remove();

                try {
                    const responseDelete = await fetch(`http://localhost:3030/data/catches/${catchId}`, {
                        method: 'DELETE',
                        headers: {
                            'X-Authorization': token
                        }
                    });
                    if(responseDelete.ok === false) {
                        const error = await responseDelete.json();
                        throw new Error(error.message);
                    }
                } catch (error) {
                    alert(error.message);
                }
            }
        });

    } catch (error) {
        alert(error.message);
    }
}

async function onAdd(event) {
    event.preventDefault();

    const angler = document.querySelector('[name="angler"]');
    const weight = document.querySelector('[name="weight"]');
    const species = document.querySelector('[name="species"]');
    const location = document.querySelector('[name="location"]');
    const bait = document.querySelector('[name="bait"]');
    const captureTime = document.querySelector('[name="captureTime"]');

    if(angler.value === '' || weight.value === '' || species.value === ''
    || location.value === '' || bait.value === '' || captureTime.value === '') {
        return;
    }

    const newCatch = {
        angler: angler.value, 
        weight: weight.value, 
        species: species.value, 
        location: location.value, 
        bait: bait.value, 
        captureTime: captureTime.value
    }

    angler.value = '';
    weight.value = '';
    species.value = '';
    location.value = '';
    bait.value = '';
    captureTime.value = '';

    if(token === null) {
        alert('Please login!');
        window.location = '../src/login.html';
        return;
    }

    try {
        const response = await fetch('http://localhost:3030/data/catches', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'X-Authorization': token
                },
            body: JSON.stringify(newCatch)
        });
        if(response.ok === false) {
            const err = await response.json();
            throw new Error(err.message);
        }
    } catch (error) {
        alert(error.message);
    }

    
}

function onLogout(event) {
    fetch('http://localhost:3030/users/logout', {
        headers: {
            'X-Authorization': token
        }
    });

    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('id');
    window.location = '../src/index.html';
}
