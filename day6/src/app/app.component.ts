import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day6';
  isDanger: boolean = false;
  isWarning: boolean = false;
  classes = 'red-border yellow-background'
}

