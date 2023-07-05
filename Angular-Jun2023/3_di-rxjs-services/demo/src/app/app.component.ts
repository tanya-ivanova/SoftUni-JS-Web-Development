import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './type/JsonplaceholderUser';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //providers: [UserService]
})
export class AppComponent implements OnInit {
  title = 'demo';
  appUsers: User[] = [];
  isLoading = true;

  constructor(public userService: UserService) {
    this.appUsers = this.userService.users;
  }

  ngOnInit() {
    //Promise
    // this.userService.getUsers()
    //   .then(users => {
    //     console.log(users);
    //     this.appUsers = users;
    //     this.isLoading = false;
    //   })

    //Observable
    this.userService.getUsers()
      .subscribe(users => {
        console.log(users);
        this.appUsers = users;
        this.isLoading = false;
      })
  }

  setUser(inputName: HTMLInputElement, inputAge: HTMLInputElement): void {
    //do something

    //this.userService.addUser(inputName, inputAge);
    this.appUsers = this.userService.users;
  }
}
