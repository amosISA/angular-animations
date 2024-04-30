import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('myAnimation', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'red'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: 'yellow'
      })),
      transition('open => closed', [animate('1s')]),
      transition('closed => open', [animate('0.1s')]),
    ]),
    trigger('enterLeave', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(10px)'
        }),
        animate('500ms', style({
          opacity: 1,
          transform: 'translateY(0px)'
        }))
      ]),
      transition(':leave', [
        animate('500ms', style({
          opacity: 0,
          transform: 'translateY(10px)'
        }))
      ])
    ])
  ]
})
export class AppComponent {
  enterLeave = signal(false);
  isOpen = signal(true);
  toggle(): void {
    this.isOpen.set(!this.isOpen());
  }
}
