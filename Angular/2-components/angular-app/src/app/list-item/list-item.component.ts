import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';

export interface ICustomEvent {
  test: number;
}

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit, OnDestroy {
  @Input('currentUser') userItem!: {firstName: string; lastName: string;}
  @Input() showLastNameValue!: boolean;

  @Input() staticString!: string

  @Input() staticNumber!: number

  @Output('myCustomEvent') customEvent = new EventEmitter<ICustomEvent>();

  intervaId!: number;

  constructor() {    
    console.log(this.userItem);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervaId);
  }

  ngOnInit() {
    this.intervaId = setInterval(() => {

    }, 5000) as unknown as number;

    console.log(this.userItem);
  }

  selectClickHandler($event: MouseEvent) {
    $event.stopPropagation();
    this.customEvent.emit({test: 123});
  }
}
