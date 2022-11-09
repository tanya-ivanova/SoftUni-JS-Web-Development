async function solution() {
    const mainSection = document.getElementById('main');

    try {
        const response = await fetch('http://localhost:3030/jsonstore/advanced/articles/list');
        if(response.ok === false) {
            throw new Error('Error');
        }

        const listData = await response.json();

        listData.forEach(el => {
            const divAccordion = document.createElement('div');
            divAccordion.classList.add('accordion');

            const divHead = document.createElement('div');
            divHead.classList.add('head');
            const span = document.createElement('span');
            span.textContent = el.title;
            const buttonForContent = document.createElement('button');
            buttonForContent.classList.add('button');
            buttonForContent.setAttribute('id', el._id);
            buttonForContent.textContent = 'More';
            divHead.appendChild(span);
            divHead.appendChild(buttonForContent);

            const divExtra = document.createElement('div');
            divExtra.classList.add('extra');
            divExtra.style.display = 'none';

            const p = document.createElement('p');

            fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${el._id}`)
                .then(res => res.json())
                .then(data => {
                    p.textContent = data.content;
                })
                .catch(er => alert(er.message));
            
            divExtra.appendChild(p);

            divAccordion.appendChild(divHead);
            divAccordion.appendChild(divExtra);
            mainSection.appendChild(divAccordion);

            buttonForContent.addEventListener('click', (e) => {
                if(buttonForContent.textContent === 'More') {
                    divExtra.style.display = 'block';
                    buttonForContent.textContent = 'Less';
                } else {
                    divExtra.style.display = 'none';
                    buttonForContent.textContent = 'More';
                }
            })
        });

    } catch (error) {
        alert(error.message);
    }  

}

solution();