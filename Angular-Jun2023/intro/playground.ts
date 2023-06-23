type User1 = {
  name: string;
  age: number;
};

const user: User1 = {
    name:'Ivan',
    age: 12
}

interface User2 {
    name: string;
    age: number;
};

class UserTest implements User2 {
    public name: string;
    public age: number;
}

enum PaymentStatus2 {
    Failed = 0,
    Successfull = 1,
    Pending = 2,
}

const paymentArr = ['Failed', 'Successfull', 'Pending'];

const paymentObj = {
    Failed: 'Failed',
    Successfull: 'Successfull',
    Pending: 'Pending'
};

interface UserInterface {
    name: string;
}

function testFunc(name: string, users: UserInterface[]): void {
    users.forEach(user => {
        user.name = name;
        console.log(user.name);
    })
}

function testFunc2(name: string, users: UserInterface[]): number {
    return 5;
}
