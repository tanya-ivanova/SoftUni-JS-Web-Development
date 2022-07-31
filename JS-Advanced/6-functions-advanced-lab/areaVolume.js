function solve(area, vol, input){    
    return JSON.parse(input).map(x => ({
        area: area.call(x),
        volume: vol.call(x)
    }))
    
    // for (let item of coordinates) {
    //     let areaItem = area.call(item);
    //     let volumeItem = vol.call(item);
    //     let itemObj = {
    //         area: areaItem,
    //         volume: volumeItem
    //     }
    //     output.push(itemObj);
    // }    
}

solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`);

function area() {
        return Math.abs(this.x * this.y);
}

function vol() {
    return Math.abs(this.x * this.y * this.z);
}