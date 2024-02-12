import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { PokedexComponent } from './Components/pokedex/pokedex.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonTypeBackgroundPipe } from "./Pipes/pokemontypebackground.pipe";
import { PokemonDetailComponent } from './Components/pokemondetail/pokemondetail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DashboardComponent,
    PokedexComponent,
    PokemonTypeBackgroundPipe,
    PokemonDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
