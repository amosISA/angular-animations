import {
    animate,
    animation,
    query,
    stagger,
    style,
    transition,
    trigger,
} from '@angular/animations';

/* 1 - Exportando */
export const EnterLeave = trigger('enterLeave', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('500ms', style({ opacity: 1 })),
  ]),
  transition(':leave', [animate('500ms', style({ opacity: 0 }))]),
]);

export const FadeEach = trigger('fadeEach', [
  transition(':enter', [
    query('li', [
      style({ opacity: 0, transform: 'translateY(20px)' }),
      stagger(30, animate('300ms cubic-bezier(0.23, 1, 0.32, 1)')),
    ]),
  ]),
]);

/* 2 - Mediante useAnimation() */
export const fade = animation(
  query('li', [
    style({ opacity: 0, transform: 'translateY(20px)' }),
    stagger(30, animate('300ms cubic-bezier(0.23, 1, 0.32, 1)')),
  ])
);

/* 3 - Mediante useAnimation() + params */
export const fade2 = animation(
  query('li', [
    style({ opacity: '{{ opacity }}', transform: 'translateY({{ y }}px)' }),
    stagger(30, animate('{{ duration }}ms cubic-bezier(0.23, 1, 0.32, 1)'))
  ])
);
