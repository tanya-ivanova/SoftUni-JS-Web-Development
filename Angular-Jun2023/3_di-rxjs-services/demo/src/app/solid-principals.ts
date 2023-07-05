class Wallet {
    balance = 0;
  
    constructor(balance: number) {
      this.balance = balance;
    }
  }
  
  class Car {
    model = '';
  
    constructor(model: string) {
      this.model = model;
    }
  }
  
  class Person {
    wallet: Wallet
    car: Car
    constructor(balance: number, carModel: string) {
      this.wallet = new Wallet(balance);
      this.car = new Car(carModel);
    }
  }
  
  const personIvan = new Person(345, 'Mercedes');
  personIvan.wallet.balance 
  const personMaria = new Person(699, 'Ford');
  personMaria.wallet.balance 
  
  class PersonBetter {
    wallet: Wallet
    car: Car
    constructor(car: Car, wallet: Wallet) {
      this.car = car;
      this.wallet = wallet;
    }
  }
  
  class PersonBetterwithName extends PersonBetter {
    name: string; 
  
    constructor(car: Car, wallet: Wallet, name: string) {
      super(car, wallet);
      this.name = name;
    }
  }
  
  const ivansCar = new Car('Lada');
  const ivansWallet = new Wallet(1000);
  const personIvanBetter = new PersonBetter(ivansCar, ivansWallet);
  const personIvanBetterWithName = new PersonBetterwithName(ivansCar, ivansWallet, 'Ivan');