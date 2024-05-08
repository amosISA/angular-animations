import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { PokemonComponent } from './pokemon.component';

@Component({
  standalone: true,
  imports: [RouterOutlet, RouterLink, FormsModule, PokemonComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  search = signal<number | string | null>(null);
  router = inject(Router);

  getPokemon(value: number | string): void {
    this.search.set(value);
    if (this.search()) {
      this.router.navigateByUrl('/pokemon/' + this.search());
    }
  }
}
