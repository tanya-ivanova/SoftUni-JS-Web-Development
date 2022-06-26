function partyTime2(input) {
    let list = {
        vip: [],
        regular: []
    }

    while(input[0] !== "PARTY") {
        let guestInvite = input.shift();
        let firstChar = guestInvite[0];

        if (Number.isNaN(Number(firstChar))) {
            list.regular.push(guestInvite);
        } else {
            list.vip.push(guestInvite);
        }
    }
    input.shift();

    for (let guest of input) {
        if (list.vip.includes(guest)) {
            let index = list.vip.indexOf(guest);
            list.vip.splice(index, 1);
        } else if (list.regular.includes(guest)) {
            let index = list.regular.indexOf(guest);
            list.regular.splice(index, 1);
        }
    }
    let count = list.vip.length + list.regular.length;
    console.log(count);
    console.log(list.vip.join("\n"));
    console.log(list.regular.join("\n"));
}

partyTime2(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
])