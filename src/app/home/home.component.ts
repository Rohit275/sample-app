import { Component, Output, Input, EventEmitter } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public text = 'Welcome';
  sample = '';
  sampleForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
  });
  name = new FormControl();

  onSubmit() {
    console.log(this.sampleForm.value);
  }

  onKeyUp($event: any) {
    console.log($event.target.value);
  }

  @Input() count: number = 0;

  @Output() countChanged: EventEmitter<number> = new EventEmitter();

  increment() {
    this.count++;
    this.countChanged.emit(this.count);
  }

  decrement() {
    this.count--;
    this.countChanged.emit(this.count);
  }
}
