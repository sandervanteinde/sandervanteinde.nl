import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackgroundBallComponent } from './components/background-ball/background-ball.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BackgroundBallComponent, TopMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent {
  title = 'website';
}
