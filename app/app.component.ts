import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  value = '';
  counter = 0;

  constructor() {}

  // onChange(event) {
  //   this.value = event;
  //   this.counter = this.counter + 1;
  //   this.cd.detectChanges();
  // }
}
