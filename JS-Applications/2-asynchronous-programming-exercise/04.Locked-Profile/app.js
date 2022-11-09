function lockedProfile() {
    let main = document.getElementById('main');

    fetch('http://localhost:3030/jsonstore/advanced/profiles')
        .then(res => res.json())
        .then(data => {
            const dataAsArray = Object.entries(data);
            //console.log(dataAsArray);
            dataAsArray.forEach(el => {
                let divProfile = document.createElement('div');
                divProfile.classList.add('profile');

                let img = document.createElement('img');
                img.src = './iconProfile2.png';
                img.classList.add('userIcon');
                
                let inputLock = document.createElement('input');
                inputLock.setAttribute('type', 'radio');
                inputLock.setAttribute('name', `${el[1].username}Locked`);
                inputLock.setAttribute('value', 'lock');
                inputLock.setAttribute('checked', true);
                
                let labelLock = document.createElement('label');
                labelLock.textContent = 'Lock';                

                let inputUnlock = document.createElement('input');
                inputUnlock.setAttribute('type', 'radio');
                inputUnlock.setAttribute('name', `${el[1].username}Locked`);
                inputUnlock.setAttribute('value', 'unlock');                

                let labelUnlock = document.createElement('label');
                labelUnlock.textContent = 'Unlock';                

                let br = document.createElement('br');
                let hr = document.createElement('hr');

                let labelUsername = document.createElement('label');
                labelUsername.textContent = 'Username';

                let inputUsername = document.createElement('input');
                inputUsername.setAttribute('type', 'text');
                inputUsername.setAttribute('name', `${el[1].username}Username`);
                inputUsername.setAttribute('value', `${el[1].username}`);
                inputUsername.setAttribute('disabled', true);
                inputUsername.setAttribute('readonly', true);

                let divHidden = document.createElement('div');
                divHidden.setAttribute('id', `${el[1].username}HiddenFiealds`);
                divHidden.style.display = 'none';

                let hrInHiddenDiv = document.createElement('hr');

                let labelEmail = document.createElement('label');
                labelEmail.textContent = 'Email:';

                let inputEmail = document.createElement('input');
                inputEmail.setAttribute('type', 'email');
                inputEmail.setAttribute('name', `${el[1].username}Email`);
                inputEmail.setAttribute('value', `${el[1].email}`);
                inputEmail.setAttribute('disabled', true);
                inputEmail.setAttribute('readonly', true);

                let labelAge = document.createElement('label');
                labelAge.textContent = 'Age:';

                let inputAge = document.createElement('input');
                inputAge.setAttribute('type', 'text');
                inputAge.setAttribute('name', `${el[1].username}Age`);
                inputAge.setAttribute('value', `${el[1].age}`);
                inputAge.setAttribute('disabled', true);
                inputAge.setAttribute('readonly', true);

                divHidden.appendChild(hrInHiddenDiv);
                divHidden.appendChild(labelEmail);
                divHidden.appendChild(inputEmail);
                divHidden.appendChild(labelAge);
                divHidden.appendChild(inputAge);

                let buttonShowInfo = document.createElement('button');
                buttonShowInfo.textContent = 'Show more';

                divProfile.appendChild(img);
                divProfile.appendChild(labelLock);
                divProfile.appendChild(inputLock);
                divProfile.appendChild(labelUnlock); 
                divProfile.appendChild(inputUnlock);                               
                divProfile.appendChild(br);
                divProfile.appendChild(hr);
                divProfile.appendChild(labelUsername);
                divProfile.appendChild(inputUsername);
                divProfile.appendChild(divHidden);
                divProfile.appendChild(buttonShowInfo);
                main.appendChild(divProfile);

                buttonShowInfo.addEventListener('click', manageInfo);

                function manageInfo(event) {
                    if (buttonShowInfo.textContent === 'Show more') {
                        if(inputUnlock.checked === true) {
                            divHidden.style.display = 'block';
                            buttonShowInfo.textContent = 'Hide it';
                        }
                    } else {
                        if(inputUnlock.checked === true) {
                            divHidden.style.display = 'none';
                            buttonShowInfo.textContent = 'Show more';
                        }
                    }
                }
            });
            

        })
        .catch(er => console.log(er));
}