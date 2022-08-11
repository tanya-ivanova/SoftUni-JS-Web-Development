function solve(inputArr, sortingCriterion) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }

        static compareDestination(a, b) {
            return a.destination.localeCompare(b.destination);
        }

        static comparePrice(a, b) {
            return a.price - b.price;
        }

        static compareStatus(a, b) {
            return a.status.localeCompare(b.status);
        }
    }

    let output = [];

    for(let item of inputArr) {
        let [destination, price, status] = item.split('|');
        price = Number(price);
        let ticket = new Ticket(destination, price, status);

        output.push(ticket);
    }

    if(sortingCriterion === 'destination') {
        output.sort(Ticket.compareDestination);
    } else if (sortingCriterion === 'price') {
        output.sort(Ticket.comparePrice);
    } else if(sortingCriterion === 'status') {
        output.sort(Ticket.compareStatus);
    }
    // sorting also works with the below code (no need for statuc methods if the below code is used):
    // if(sortingCriterion === 'destination' || sortingCriterion === 'status') {
    //     output.sort((a, b) => a[sortingCriterion].localeCompare(b[sortingCriterion]));
    // } else if (sortingCriterion === 'price') {
    //     output.sort((a, b) => a.price - b.price);
    // }

    return output;    
}

solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status');