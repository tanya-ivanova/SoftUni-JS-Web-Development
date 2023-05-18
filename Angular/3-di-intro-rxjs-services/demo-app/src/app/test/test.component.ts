import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Injector, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { myCustomToken } from '../app.module';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  providers: [],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestComponent implements OnInit, OnChanges {
  @Input() users!: {name: string}[];

  constructor (
    private cdRef: ChangeDetectorRef,
    private injector: Injector
  ) {
    this.cdRef.detach();
    const value = this.injector.get(myCustomToken, null);
    const appComp = this.injector.get(AppComponent);
    console.log(value, appComp);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.users.length > 4) {
      this.cdRef.detectChanges();
    }
  }

  ngOnInit(): void {
    this.cdRef.detectChanges();
  }
}

interface ClassProvider {
  provide: any;
  useClass: any;
}

interface ValueProvider {
  provide: any;
  useValue: any;
}

type Provider = ClassProvider | ValueProvider;

const injector = {
  collection: new Map(),
  instances: new Map(),
  provide(provider: Provider) {
    this.collection.set(provider.provide, provider)
  },
  get(key: any, defaultValue?: any): any {
    const provider = this.collection.get(key) as Provider;
    if(!provider) {
      if (defaultValue) {
        return defaultValue;
      }
      throw new Error('Value not found in injector');
    }
    if((provider as ValueProvider).useValue) {
      return (provider as ValueProvider).useValue;
    }

    if((provider as ClassProvider).useClass) {
      let instance = this.instances.get(provider.provide);
      if(instance) {
        return instance;
      }
      instance = new (provider as ClassProvider).useClass;
      this.instances.set(provider.provide, instance);
      return instance;
    }
  }
}

type InjectorType = typeof injector;

const amount = Symbol('Amount');

class Wallet {
  private amount: number;

  constructor (injector: InjectorType) {
    this.amount = injector.get(amount, 0);
  }
}

class Person {
  wallet: Wallet;
  constructor(injector: InjectorType) { 
    this.wallet = injector.get(Wallet);   
  }
}

class Employee {
  wallet: Wallet;
  constructor(injector: InjectorType) { 
    this.wallet = injector.get(Wallet);   
  }
}

injector.provide({provide: Wallet, useClass: Wallet});
injector.provide({provide: amount, useValue: amount});

// class Person {
//   wallet: Wallet

//   constructor() {
//     this.wallet = new Wallet(200);
//   }
// }

const w = new Wallet(injector);
const p = new Person(injector);
const e = new Employee(injector);
