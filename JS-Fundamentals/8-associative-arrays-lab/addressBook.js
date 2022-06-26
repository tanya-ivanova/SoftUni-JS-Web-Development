function addressBook (input) {
    let addressesObj = {};

    for (let line of input) {
        let [name, address] = line.split(":");
        addressesObj[name] = address;
    }

    let sortedArr = Object.entries(addressesObj);
    sortedArr.sort((a, b) => a[0].localeCompare(b[0]));
    
    for (let arr of sortedArr) {
        console.log(`${arr[0]} -> ${arr[1]}`);
    }
}

addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']);