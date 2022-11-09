function solve() {
    const info = document.querySelector('span');
    const departButton = document.getElementById('depart');
    const arriveButton = document.getElementById('arrive');
    
    let busStop = {
        next: 'depot'
    }

    function depart() {
        departButton.disabled = true;
        
        fetch(`http://localhost:3030/jsonstore/bus/schedule/${busStop.next}`)
            .then(res => {
                if(res.ok === false) {
                    throw new Error("Error");
                }
                return res.json();
            })
            .then(data => {
                busStop = JSON.parse(JSON.stringify(data));
                info.textContent = `Next stop ${busStop.name}`;           
            })
            .catch(error => {
                info.textContent = 'Error';
                departButton.disabled = true;
                arriveButton.disabled = true;
            });
        
        arriveButton.disabled = false;
    }

    function arrive() {
        info.textContent = `Arriving at ${busStop.name}`;
        departButton.disabled = false;
        arriveButton.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();