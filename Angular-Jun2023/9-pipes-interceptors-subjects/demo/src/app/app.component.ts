import { Component, OnInit } from '@angular/core';
import { interval, map } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user = {
    name: 'Pesho',
    age: 12,
    list: [1, 2, 3, 4, 5, 6, 7, 8]
  }

  p = new Promise((resolve) => {
    setTimeout(() => {
      resolve(100);
    }, 3000);    
  });

  time$ = interval(1000).pipe(map(() => new Date()));

  sum(a: number, b: number): number {
    return a + b;
  }

  addProperty() {
    (this.user as any)['test123'] = 'test123';
  }

  constructor(
    private userService: UserService
  ) {}

  ngOnInit(): void {
    // this.userService.loadUsers().subscribe({
    //   next: console.log,
    //   error: (err) => {
    //     console.error(`Error from appComponent: ${err}`);
    //   }
    // })
  }

  users$ = this.userService.userObs$;
  isLoadingUsers$ = this.userService.isLoadingUsers$;

  reloadUsers(): void {
    this.userService.loadUsers();    
  }
}
