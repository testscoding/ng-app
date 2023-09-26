import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngApp';
  list:any = [];
  isShow = false;
  constructor() {
    this.list = [1,2,3,5]
  }

}
