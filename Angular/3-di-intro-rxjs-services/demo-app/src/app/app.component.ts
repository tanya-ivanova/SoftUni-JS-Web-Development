import { Component, Inject, Optional } from '@angular/core';
import { MyClass } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-app';

  counter = 0;

  users = [
    {
      name: 'Ivan'
    },
    {
      name: 'Pesho'
    }
  ];

  // constructor(
  //  @Inject('Test') test: string
  //  @Optional @Inject(myCustomToken) test1: string
  //) {
  //   // setInterval(() => {
  //   //   this.counter++;
  //   // }, 3000);

  //   console.log(test);    
  // }

  constructor(test: MyClass) {
    console.log(test);
  }

  addUserHandler = (nameInput: HTMLInputElement): void => {
    const {value: name} = nameInput;
    // this.users.push({name});
    this.users = this.users.concat({name});
    nameInput.value = '';
  }
}
