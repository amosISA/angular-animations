import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';

export interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_shiny: string;
  };
}

export interface DisplayPokemon {
  id: number | undefined;
  name: string | undefined;
  img: string | undefined;
}

@Injectable({ providedIn: 'root' })
export class PokemonService {
  httpClient = inject(HttpClient);
  findPokemon(id: number | string): Observable<DisplayPokemon> {
    return this.httpClient
      .get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .pipe(
        catchError(() => of(null)),
        map((p) => ({
          id: p?.id,
          name: p?.name,
          img: p?.sprites?.front_shiny,
        }))
      );
  }
}
