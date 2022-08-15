function createPerson(firstName, lastName) {
    let result = {
        firstName,
        lastName,
        fullName: firstName + ' ' + lastName
    }

    Object.defineProperty(result, 'fullName', {
        get() {
            return this.firstName + ' ' + this.lastName;
        },
        set(value) {
            let [firstName, lastName] = value.split(' ');

            if(firstName !== undefined && lastName !== undefined) {
                this.firstName = firstName;
                this.lastName = lastName;
            }
        }
    })

    return result;
}

let person = createPerson("Albert", "Simpson");
console.log(person.fullName); //Albert Simpson
person.firstName = "Simon";
console.log(person.fullName); //Simon Simpson
person.fullName = "Peter";
console.log(person.firstName);  // Simon
console.log(person.lastName);  // Simpson