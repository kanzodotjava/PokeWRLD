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

  private favoritesKey = 'favoritePokemons';
  
  constructor(private http: HttpClient) { }


  public getAllPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.url).pipe(
      map((pokemons: Pokemon[]) => {
        const uniquePokemons = pokemons.filter((pokemon, index, self) =>
          index === self.findIndex((p) => (
            p.id === pokemon.id
          ))
        );
        return uniquePokemons.slice(0, 500); 
      })
    );
  }

  getPokemonImage(id: number): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }

  public getPokemonById(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.url}/${id}`);
  }

  getAllFavorites(): Pokemon[] {
    const favoritesJson = localStorage.getItem(this.favoritesKey);
    return favoritesJson ? JSON.parse(favoritesJson) : [];
  }

  saveFavorites(favorites: Pokemon[]): void {
    localStorage.setItem(this.favoritesKey, JSON.stringify(favorites));
  }

  getFavorites(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.url).pipe(
      map((pokemons: Pokemon[]) => {
        const favorites = this.getAllFavorites();
        pokemons.forEach(pokemon => {
          pokemon.favorite = favorites.some(favorite => favorite.id === pokemon.id);
        });
        return pokemons;
      })
    );
  }

  addToFavorites(pokemon: Pokemon): void {
    let favorites = this.getAllFavorites();
    if (!favorites.some(p => p.id === pokemon.id)) {
      favorites.push(pokemon);
      this.saveFavorites(favorites);
    }
  }

  removeFromFavorites(pokemon: Pokemon): void {
    let favorites = this.getAllFavorites().filter(p => p.id !== pokemon.id);
    this.saveFavorites(favorites);
  }

}

