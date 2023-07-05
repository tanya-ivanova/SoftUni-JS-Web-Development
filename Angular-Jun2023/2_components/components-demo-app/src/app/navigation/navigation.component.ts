import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, AfterViewInit, OnChanges {
  title = 'title';
  toggle = true;
  isActive = false;
  inputValue = 'Hello there';
  @Input('titleFromApp') titleTakenFromApp: string = '';
  @Input('activeUsers') activeUsers: {name: string; age: number}[] = [];

  @Output() onTestOutput = new EventEmitter<boolean>();

  ngOnInit() {
    console.log('Navigation initialized');
  }

  ngAfterViewInit() {
    console.log('After view init');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }  

  handleClick(event: Event): void {
    this.toggle = !this.toggle;
    console.log(event);
  }

  activeHandler(): void {
    this.isActive = !this.isActive;
    this.onTestOutput.emit(this.isActive);
  }
}
