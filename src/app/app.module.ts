import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { PokedexComponent } from './Components/pokedex/pokedex.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PokemonTypeBackgroundPipe } from "./Pipes/pokemontypebackground.pipe";
import { PokemonDetailComponent } from './Components/pokemondetail/pokemondetail.component';
import { HttpsInterceptor } from './Interceptors/http.interceptor';
import { BattlesComponent } from './Components/battles/battles.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DashboardComponent,
    PokedexComponent,
    PokemonTypeBackgroundPipe,
    PokemonDetailComponent,
    BattlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpsInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
