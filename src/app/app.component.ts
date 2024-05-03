import {
  animate,
  animateChild,
  query,
  style,
  transition,
  trigger
} from '@angular/animations';
import { Component, HostBinding, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// query() + animate()
const shakeAnim = [
  style({ transform: 'rotate(0)' }),
  animate('0.1s', style({ transform: 'rotate(2deg)' })),
  animate('0.1s', style({ transform: 'rotate(-2deg)' })),
  animate('0.1s', style({ transform: 'rotate(2deg)' })),
  animate('0.1s', style({ transform: 'rotate(0)' })),
];

export const EnterExitLeft = [
  trigger('enterExitLeft', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateX(-200px)' }),
      animate(
        '300ms ease-in',
        style({ opacity: 1, transform: 'translateX(0)' })
      ),
    ]),
    transition(':leave', [
      animate(
        '300ms ease-in',
        style({ opacity: 0, transform: 'translateX(-200px)' })
      ),
    ]),
  ]),
];

export const EnterExitRight = [
  trigger('enterExitRight', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateX(200px)' }),
      animate(
        '300ms ease-in',
        style({ opacity: 1, transform: 'translateX(0)' })
      ),
    ]),
    transition(':leave', [
      animate(
        '300ms ease-in',
        style({ opacity: 0, transform: 'translateX(200px)' })
      ),
    ]),
  ]),
];

export const Container = [
	trigger('container', [
		transition(':enter, :leave', [
			query('@*', animateChild()),
		]),
	]),
];

@Component({
  standalone: true,
  imports: [RouterOutlet],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    // With query
    trigger('queryAnimation', [
      transition('* => sinLimite', [
        query('.card', shakeAnim, { optional: true }),
      ]),
      transition('* => conLimite', [
        query('.card', shakeAnim, { limit: 2, optional: true }),
      ]),
    ]),

    // With query + childs
    Container, EnterExitLeft, EnterExitRight
  ],
})
export class AppComponent {
  animation = signal<string | null>(null); // sinLimite / conLimite
  isDisplayed = signal(true);

  @HostBinding('@.disabled') public animationsDisabled = true;
}
