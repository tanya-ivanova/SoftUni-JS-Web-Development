function getInfo() {
    const input = document.getElementById('stopId').value;    
    const stopName = document.getElementById('stopName');
    const listBuses = document.getElementById('buses');            

    fetch(`http://localhost:3030/jsonstore/bus/businfo/${input}`)
        .then(handleResposne)
        .then(handleData)
        .catch(handleError);
        
    function handleResposne(response) {
        console.log(response);
        if(response.ok === false) {
            throw new Error('Error');
        }

        return response.json();
    }

    function handleData(data) {
        listBuses.innerHTML = '';            
        stopName.textContent = data.name;

        let buses = Object.entries(data.buses);
        buses.forEach(bus => {
            const liElement = document.createElement('li');
            liElement.textContent = `Bus ${bus[0]} arrives in ${bus[1]} minutes`;
            listBuses.appendChild(liElement);
        });
    }

    function handleError(error) {
        listBuses.innerHTML = ''; 
        stopName.textContent = 'Error';
    }     
   

    // async function onClick(event) {
    //     //event.preventDefault();        

    //     try {
    //         const response = await fetch(`http://localhost:3030/jsonstore/bus/businfo/${input}`);

    //         if(response.ok === false) {
    //             throw new Error('Error');
    //         }

    //         const data = await response.json();
            
    //         listBuses.innerHTML = '';

    //         stopName.textContent = data.name;

    //         let buses = Object.entries(data.buses);
    //         buses.forEach(bus => {
    //             const liElement = document.createElement('li');
    //             liElement.textContent = `Bus ${bus[0]} arrives in ${bus[1]} minutes`;
    //             listBuses.appendChild(liElement);
    //         })

    //     } catch (error) {
            
    //     }
    // }
}