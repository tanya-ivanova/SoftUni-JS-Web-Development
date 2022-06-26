let obj = {
    name: "Tanya",
    age: 39,
    city: "Sofia"
}

console.log(obj);

obj = {
    ...obj,
    name: "Ivanova"
}

let {name} = obj; 

console.log(obj);