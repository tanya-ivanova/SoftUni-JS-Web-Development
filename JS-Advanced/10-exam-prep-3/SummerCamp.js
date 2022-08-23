class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {
            child: 150, 
            student: 300, 
            collegian: 500
        }
        this.listOfParticipants = [];
    }

    registerParticipant (name, condition, money) {
        if(!this.priceForTheCamp.hasOwnProperty(condition)) {
            throw new Error('Unsuccessful registration at the camp.');
        }

        let participant = this.listOfParticipants.find(p => p.name === name);

        if(participant !== undefined) {
            return `The ${name} is already registered at the camp.`;
        }

        if(money < this.priceForTheCamp[condition]) {
            return 'The money is not enough to pay the stay at the camp.';
        }

        this.listOfParticipants.push({
            name, 
            condition, 
            power: 100, 
            wins: 0
        });

        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant (name) {
        let participant = this.listOfParticipants.find(p => p.name === name);

        if(participant === undefined) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }

        let index = this.listOfParticipants.indexOf(participant);
        this.listOfParticipants.splice(index, 1);

        return `The ${name} removed successfully.`;
    }

    timeToPlay (typeOfGame, name1, name2) {
        let participant1 = this.listOfParticipants.find(p => p.name === name1);
        let participant2 = this.listOfParticipants.find(p => p.name === name2);

        if(typeOfGame === 'WaterBalloonFights') {
            if(participant1 === undefined || participant2 === undefined) {
                throw new Error('Invalid entered name/s.');
            }
        }

        if(typeOfGame === 'Battleship') {
            if(participant1 === undefined) {
                throw new Error('Invalid entered name/s.');
            }
        }

        if(participant1 !== undefined && participant2 !== undefined) {
            if(participant1.condition !== participant2.condition) {
                throw new Error('Choose players with equal condition.');
            }
        }

        if(typeOfGame === 'Battleship') {
            participant1.power += 20;
            return `The ${name1} successfully completed the game ${typeOfGame}.`;
        }

        if(typeOfGame === 'WaterBalloonFights') {
            if(participant1.power > participant2.power) {
                participant1.wins += 1;
                return `The ${name1} is winner in the game WaterBalloonFights.`;
            } else if(participant2.power > participant1.power) {
                participant2.wins += 1;
                return `The ${name2} is winner in the game WaterBalloonFights.`;
            } else {
                return 'There is no winner.';
            }
        }
    }

    toString () {
        let output = [`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`];
        
        this.listOfParticipants
        .sort((a, b) => b.wins - a.wins)
        .forEach(p => output.push(`${p.name} - ${p.condition} - ${p.power} - ${p.wins}`));

        return output.join('\n');
    }
}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());