import { Injectable } from '@angular/core';
import { User } from './type/JsonplaceholderUser';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [];

  constructor (private http: HttpClient) {
    // setInterval(() => {
    //   this.users.push({
    //     name: 'DemoName',
    //     age: 0
    //   })

    //   console.log('User has been added')
    // }, 3000)
  }

  // addUser (inputName: HTMLInputElement, inputAge: HTMLInputElement) {
  //   const user = {
  //     name: inputName.value,
  //     age: Number(inputAge.value)
  //   }
  //   this.users.push(user); //ChangeDetectionStrategy => Default

  //   //this.users = [...this.users, user] //ChangeDetectionStrategy => OnPush

  //   inputName.value = ''
  //   inputAge.value = ''
  // }

  getUsers() {
    //Promise
    // return fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(res => res.json());

    //Observable
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
}
