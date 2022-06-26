function phonebook (input) {
    let assocArray = {};

    for (let line of input) {
        let [name, phone] = line.split(" ");
        assocArray[name] = phone;
    }

    for(let name in assocArray) {
        console.log(`${name} -> ${assocArray[name]}`);
    }
}

phonebook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']);