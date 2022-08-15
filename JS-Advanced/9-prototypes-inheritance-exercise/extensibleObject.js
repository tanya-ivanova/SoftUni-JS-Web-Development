function extensibleObject() {
    let result = {
        extend: function (template) {
            for(let key in template) {
                if(typeof(template[key]) === 'function') {
                    Object.getPrototypeOf(this)[key] = template[key];
                } else {
                    this[key] = template[key];
                }
            }
        }
    }   

    return result;   
}

const myObj = extensibleObject();

const template = { 
    extensionMethod: function () {},
    extensionProperty: 'someString'
}

myObj.extend(template);