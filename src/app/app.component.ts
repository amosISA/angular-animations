import { Component, ElementRef, HostListener, OnInit, signal, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  seleccionado = signal(false);
  zoom = signal(false);

  webApiDiv = viewChild<ElementRef>('webApiDiv');

  shakeAnimations() {
    return [
      { transform: 'rotate(0)' },
      { transform: 'rotate(2deg)' },
      { transform: 'rotate(-2deg)' },
      { transform: 'rotate(0)' },
    ];
  }

  shakeTimer() {
    return {
      duration: 400,
      iterations: 3
    }
  }

  ngOnInit(): void {
    this.webApiDiv()?.nativeElement.animate(
      this.shakeAnimations(),
      this.shakeTimer()
    );
  }

  @HostListener('transitionstart', ['$event'])
  onTransitionStart(event: TransitionEvent): void {
    console.log('Transition start', event);
  }

  @HostListener('transitionend', ['$event'])
  onTransitionEnd(event: TransitionEvent): void {
    console.log('Transition end', event);
  }

  @HostListener('animationstart', ['$event'])
  onAnimationStart(event: AnimationEvent): void {
    console.log('Keyframes start', event);
  }

  @HostListener('animationend', ['$event'])
  onAnimationEnd(event: AnimationEvent): void {
    console.log('Keyframes end', event);
  }

  zoomIn(): string {
    return `scale(0.5)`;
  }

  zoomOut(): string {
    return `scale(1)`;
  }
}