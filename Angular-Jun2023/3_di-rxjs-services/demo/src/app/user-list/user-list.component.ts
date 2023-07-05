import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { User } from '../type/JsonplaceholderUser';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent {
  @Input() users: User[] = [];

  constructor(private cd: ChangeDetectorRef) {

  }

  ngOnChanges() {
    console.log('Invoked from ngOnChanges');
  }

  refresh() {
    this.cd.detectChanges();
  }
}
