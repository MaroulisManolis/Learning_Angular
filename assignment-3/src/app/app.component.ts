import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  displayContent = false;
  clicks = [];

  onHideContent() {
    this.displayContent = !this.displayContent;
    // this.clicks.push(this.clicks.length + 1);
    this.clicks.push(new Date());
  }    
}
