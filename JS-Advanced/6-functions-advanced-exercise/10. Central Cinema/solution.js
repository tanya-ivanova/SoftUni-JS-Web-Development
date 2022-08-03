function solve() {
    let [name, hall, ticketPrice] = Array.from(document.querySelectorAll('#container input'));
    
    let [buttonOnScreen, buttonClear] = Array.from(document.getElementsByTagName('button'));
    
    let sectionMovies = document.getElementById('movies').children[1];
    let sectionArchive = document.getElementById('archive').children[1];
        
    buttonOnScreen.addEventListener('click', onScreen);

    function onScreen(event) {
        event.preventDefault();

        let price = ticketPrice.value;

        let li = document.createElement('li');        

        if (name.value !== '' && hall.value !== '' && price !== '' && (!isNaN(Number(price)))) {
            sectionMovies.appendChild(li);
        }

        price = Number(price);
        
        li.appendChild(createElement('span', name.value));
        let liStrong = createElement('strong', `Hall: ${hall.value}`);
        li.appendChild(liStrong);
        
        let div = document.createElement('div');
        li.appendChild(div);
        
        let divStrong = createElement('strong', price.toFixed(2));
        div.appendChild(divStrong);
        let inputSoldTickets = document.createElement('input');
        inputSoldTickets.placeholder = 'Tickets Sold';
        div.appendChild(inputSoldTickets);
        let buttonArchive = createElement('button', 'Archive');
        div.appendChild(buttonArchive);
        let buttonDelete = createElement('button', 'Delete');

        name.value = '';
        hall.value = '';
        ticketPrice.value = '';

        buttonArchive.addEventListener('click', onArchive);
        buttonDelete.addEventListener('click', onDelete);
        buttonClear.addEventListener('click', onClear);

        function onArchive(event) {
            
            let soldTickets = inputSoldTickets.value;            
            
            if(!isNaN(Number(soldTickets)) && soldTickets !== '') {
                sectionArchive.appendChild(li);
                
                soldTickets = Number(soldTickets);
                liStrong.textContent = `Total amount: ${(price * soldTickets).toFixed(2)}`;

                divStrong.remove();
                inputSoldTickets.remove();
                buttonArchive.remove();
                div.remove();

                li.appendChild(buttonDelete);
            }            
        }

        function onDelete(event) {
            let liToBeDeleted = event.target.parentElement;
            liToBeDeleted.remove();
        }

        function onClear(event) {
            while (sectionArchive.firstChild) {
                sectionArchive.removeChild(sectionArchive.firstChild);
            }
        }
    }

    function createElement(type, content) {
        let element = document.createElement(type);
        element.textContent = content;
        return element;
    }
}