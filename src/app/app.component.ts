import { animate, group, keyframes, query, sequence, stagger, style, transition, trigger } from '@angular/animations';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('fadeGrowSequence', [
      transition(':enter', [
        query(':enter', [
          style({ opacity: 0, transform: 'scale(0.8)' }),
          sequence([
            animate('300ms ease-in', style({ opacity: 1 })),
            animate('300ms', style({ transform: 'scale(1)' })),
            animate('2000ms', style({ backgroundColor: 'red' })),
          ]),
        ], { optional: true }),
      ]),
      transition(':leave', [
        query(':leave', [
          sequence([
            animate('300ms ease-in', style({ opacity: 0 })),
            animate('300ms', style({ transform: 'scale(0.8)' })),
          ]),
        ], { optional: true }),
      ]),
    ]),
    trigger('fadeGrowGroup', [
      transition(':enter', [
        query(':enter', [
          style({ opacity: 0, transform: 'scale(0.8)' }),
          group([
            animate('200ms ease-in', style({ opacity: 1 })),
            animate('500ms', style({ transform: 'scale(1)' })),
            animate('2000ms', style({ backgroundColor: 'red' })),
          ]),
        ], { optional: true }),
      ]),
      transition(':leave', [
        query(':leave', [
          group([
            animate('200ms ease-in', style({ opacity: 0 })),
            animate('500ms', style({ transform: 'scale(0.8)' })),
          ]),
        ], { optional: true }),
      ]),
    ]),
    trigger('fadeGrowStagger', [
      transition(':enter', [
        query(':enter', [
          style({ opacity: 0, transform: 'scale(0.8)' }),
          stagger('100ms', [animate('500ms', style({ opacity: 1, transform: 'scale(1)' }))]),
        ], { optional: true }),
      ]),
      transition(':leave', [
        query(':leave', [
          stagger('-100ms', [animate('500ms', style({ opacity: 0, transform: 'scale(0.8)' }))]),
        ], { optional: true }),
      ]),
    ]),
    trigger('fadeSlideGrowKeyframe', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.5) translateY(50px)' }),
        animate(
          '500ms',
          keyframes([
            style({ opacity: 1, offset: 0.3 }),
            style({ transform: 'translateY(0)', offset: 0.6 }),
            style({ transform: 'scale(1)', offset: 1 }),
          ])
        ),
      ]),
      transition(':leave', [
        animate(
          '500ms',
          keyframes([
            style({ transform: 'scale(0.5)', offset: 0.3 }),
            style({ transform: 'scale(0.5) translateY(50px)', offset: 0.7 }),
            style({ opacity: 0, offset: 1 }),
          ])
        ),
      ]),
    ])
  ]
})
export class AppComponent {
  fadeInGrowGroup = signal(true);
  fadeInGrowSequence = signal(true);
  fadeInGrowStagger = signal(true);
  fadeInGrowKeyframes = signal(true);
}
