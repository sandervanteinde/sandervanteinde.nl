import { Component, input } from '@angular/core';

@Component({
  selector: 'app-background-ball',
  standalone: true,
  imports: [],
  templateUrl: './background-ball.component.html',
  styleUrl: './background-ball.component.scss'
})
export class BackgroundBallComponent {
  left = input<number | null>(null);
  top = input<number | null>(null);
  right = input<number | null>(null);
  bottom = input<number | null>(null);
  size = input.required<number>();
}
