import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pokemon } from '../Models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private url: string = 'https://softwium.com/api/pokemons';

  constructor(private http: HttpClient) { }

  public getAllPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.url).pipe(
      map((pokemons: Pokemon[]) => pokemons.slice(0, 390))
    );
  }
  getPokemonImage(id: number): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }
}

