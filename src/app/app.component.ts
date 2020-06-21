import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    window.onscroll = function () {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("gif").style.opacity = "0";
      } else {
        document.getElementById("gif").style.opacity = "1";
      }
    }
  }
}