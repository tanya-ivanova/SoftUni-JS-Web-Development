class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
        this.names = [];
    }

    newAdditions(footballPlayers) {     

        footballPlayers.forEach(element => {
            let [name, age, playerValue] = element.split('/');
            age = Number(age);
            playerValue = Number(playerValue); 
            
            const searchedName = this.names.find(n => n === name);
            if(searchedName === undefined) {
                this.names.push(name);
            }

            const player = this.invitedPlayers.find(p => p.name === name);
            if(player === undefined) {
                this.invitedPlayers.push({
                    name,
                    age,
                    playerValue
                });
            } else {                
                if(playerValue > player.playerValue) {
                    player.playerValue = playerValue;                    
                }
            }
        });

        return `You successfully invite ${this.names.join(', ')}.`;
    }

    signContract(selectedPlayer) {
        let [name, playerOffer] = selectedPlayer.split('/');
        playerOffer = Number(playerOffer);

        const player = this.invitedPlayers.find(p => p.name === name);

        if(player === undefined) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        if(playerOffer <= player.playerValue) {
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${player.playerValue - playerOffer} million more are needed to sign the contract!`);

        }

        player.playerValue = 'Bought';

        return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`;
    }

    ageLimit(name, age) {
        const player = this.invitedPlayers.find(p => p.name === name);
        if(player === undefined) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        if(player.age < age) {
            if(age - player.age < 5) {
                return `${name} will sign a contract for ${age - player.age} years with ${this.clubName} in ${this.country}!`;
            } else {
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
            }
        } else {
            return `${name} is above age limit!`;
        }
    }

    transferWindowResult() {
        let outputResult = ['Players list:'];

        this.invitedPlayers
        .sort((a, b) => a.name.localeCompare(b.name))
        .forEach(p => outputResult.push(`Player ${p.name}-${p.playerValue}`));

        return outputResult.join('\n');
    }
}

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());