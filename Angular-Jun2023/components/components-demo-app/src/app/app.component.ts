import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World!';

  users = [
    {
        name: 'Mitko',
        age: 21
    },
    {
        name: 'Pesho',
        age: 29
    },
    {
        name: 'Nasko',
        age: 31
    },
    {
        name: 'Plamen',
        age: 18
    },
  ]

  onOutput(isActive: boolean) {
    console.log(isActive);
  }
}
