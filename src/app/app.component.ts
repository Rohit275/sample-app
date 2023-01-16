import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'demo';
  ClickCounter = 2;

  countChangedHandler(count: number) {
    this.ClickCounter = count;
    console.log(count);
  }
}
