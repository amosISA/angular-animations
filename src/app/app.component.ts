import { UpperCasePipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ChildrenOutletContexts, Data, RouterLink, RouterOutlet } from '@angular/router';
import { slideInAnimation } from './slideInAnimation';

@Component({
  standalone: true,
  imports: [RouterOutlet, UpperCasePipe, RouterLink],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [slideInAnimation]
})
export class AppComponent {
  routes = signal(['home', 'about', 'profile']);
  contexts = inject(ChildrenOutletContexts);

  getRouteAnimationData(): Data | undefined {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
