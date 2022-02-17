import { Component } from '@angular/core';
import { cuIconAvo } from './icons.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'taiga-fontawesome';
  icon = cuIconAvo.data;
}
