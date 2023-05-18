import { Component } from '@angular/core';
import { ICustomEvent } from '../list-item/list-item.component';
import { IUser } from '../interfaces';

const myNumber = 1;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  // myProp = 'Hello World!';

  // constructor () {
  //   setTimeout(() => {
  //     this.myProp = 'Hello Other World!';
  //   }, 1000);
  // }

  users: IUser[] = [
    {
      firstName: 'Ivan',
      lastName: 'Ivanov'
    },
    {
      firstName: 'Petar',
      lastName: 'Petrov'
    },
  ];

  selectedUserIndex: null | number = null;

  showLastName = true;
  myNumber = myNumber;

  get showSelectedIndex(): boolean {
    return (this.selectedUserIndex === null ? -1 : this.selectedUserIndex) >= 0
  }

  handleClickEvent(event: MouseEvent) {
    console.log(event);
    console.log('Clicked');

    this.showLastName = !this.showLastName;
  }  

  listItemClickHandler(index: number) {
    if(this.selectedUserIndex === index) {
      this.selectedUserIndex = null;
      return;
    }
    this.selectedUserIndex = index;
  }

  customEventHandler($event: ICustomEvent) {
    console.log($event);
  }
}
