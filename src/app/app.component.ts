import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, signal } from '@angular/core';
import { AnimationDirective } from './animation.directive';
import { EnterLeave, FadeEach, fade, fade2 } from './animations';

@Component({
  standalone: true,
  imports: [AnimationDirective],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    EnterLeave,
    FadeEach,
    trigger('fade', [
      transition(':enter', useAnimation(fade))
    ]),
    trigger('fade2', [
      transition(':enter', useAnimation(fade2, { params: {
        opacity: 0,
        y: 50,
        duration: 4000
      }}))
    ])
  ]
})
export class AppComponent {
  enterLeave = signal(true);
  films = signal([
    'Braveheart',
    'El reino de los cielos',
    'Enigma',
    'Arrival'
  ]);
}
