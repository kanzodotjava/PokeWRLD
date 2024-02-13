import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { PokedexComponent } from './Components/pokedex/pokedex.component';
import { PokemonDetailComponent } from './Components/pokemondetail/pokemondetail.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'pokemons', component: PokedexComponent, canActivate: [AuthGuard] },
  { path: 'pokemon/:id', component: PokemonDetailComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
