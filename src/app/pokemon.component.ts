import { UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { debounceTime, switchMap } from 'rxjs';
import { PokemonService } from './pokemon.service';

@Component({
  standalone: true,
  imports: [UpperCasePipe],
  selector: 'app-pokemon',
  template: `
    <div class="sticky top-0 z-20 pokemon-container">
      <div class="flex flex-row flex-wrap items-center justify-center w-full gap-4 py-2">
        <div>
          <span class="font-bold">{{ pokemon()?.name | uppercase }}</span>
          <div>
            <img [attr.alt]="pokemon()?.name" [src]="pokemon()?.img" />
          </div>
        </div>
      </div>
    </div>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonComponent {
  id = input.required<string | number>();

  pokemonService = inject(PokemonService);
  pokemon = toSignal(
    toObservable(this.id).pipe(
      debounceTime(500),
      switchMap((id) => this.pokemonService.findPokemon(id))
    )
  );
}
