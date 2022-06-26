function legendaryFarming (input) {
    let keyMaterials = {
        shards: 0,
        fragments: 0,
        motes: 0
    };
    let junks = {};

    input = input.split(" ");
    
    while (input.length !== 0) {
        let quantity = Number(input.shift());
        let material = input.shift().toLowerCase();
        
        if (material === "shards" || material === "fragments" || material === "motes") {                      
            let currentQuantity = keyMaterials[material];
            keyMaterials[material] = currentQuantity + quantity;

            if (keyMaterials[material] >= 250) {
                let currentQuantity = keyMaterials[material];
                keyMaterials[material] = currentQuantity - 250;
                if(material === "shards") {
                    console.log("Shadowmourne obtained!");
                } else if (material === "fragments") {
                    console.log("Valanyr obtained!");
                } else if (material === "motes") {
                    console.log("Dragonwrath obtained!");
                }
                break;
            }            
        } else {
            if(!junks.hasOwnProperty(material)) {
                junks[material] = quantity;
            } else {
                let currentQuantity = junks[material];
                junks[material] = currentQuantity + quantity;
            }             
        }        
    }
    let sortedKeyMaterials = Object.entries(keyMaterials);
    sortedKeyMaterials.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    
    let sortedJunks = Object.entries(junks);
    sortedJunks.sort((a, b) => a[0].localeCompare(b[0]));
    
    for (let material of sortedKeyMaterials) {
        console.log(`${material[0]}: ${material[1]}`);
    }

    for (let junk of sortedJunks) {
        console.log(`${junk[0]}: ${junk[1]}`);
    }
}

legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');