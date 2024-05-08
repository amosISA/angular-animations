import { Routes } from '@angular/router';
import { PokemonComponent } from './pokemon.component';

export const appRoutes: Routes = [
    { path: 'pokemon/:id', component: PokemonComponent },
];
