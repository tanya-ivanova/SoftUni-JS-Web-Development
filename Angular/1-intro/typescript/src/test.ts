let username = 'Ivan';

console.log(username);

function createUser(username: string, age: number) {
    return {
        username,
        age
    };
}

const ivan = createUser('Ivan', 20);

let isOpen: boolean = false;
isOpen = true;

let isOpenArray: boolean[] = [false, true, true];

function id<T>(item: T): T {
    return item;
}

const num = id(1);
let num1 = id(1);
const num2 = id<number>(1);

let num3 = id<{prop: string}>({prop: '1'});

interface IMyDto {
    prop: string,
    prop1: number
}

let num4 = id<IMyDto>({prop: '1', prop1: 3});
let num5 = id<IMyDto | number>(8);

type MyDtoOrNumber = IMyDto | number;
let num6 = id<MyDtoOrNumber>({prop: '1', prop1: 3});
type BooleanArray = Array<boolean>;

// @Component({
//     selector: 'app-root'
// })
// class MyClass implements IMyDto {
//     prop: string,
//     prop1: number
// }

class MyClass1 {
    constructor(public name: string, private age: number) {}
}

const ivanushka = new MyClass1('Ivan', 20);
(ivanushka as any).age = 1000;

enum UserRole {
    Admin = 'dfgs',
    User = 'dgffdg'
}
