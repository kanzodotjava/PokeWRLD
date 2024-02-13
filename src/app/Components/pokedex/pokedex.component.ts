import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from '../../Services/pokemon.service';
import { Pokemon } from '../../Models/pokemon';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  pokemons: Pokemon[] = [];
  filteredPokemons: Pokemon[] = [];
  searchQuery: string = '';
  showFavorites: boolean = false;
  favoritePokemons: Pokemon[] = [];

  constructor(private router: Router, private pokemonService: PokemonService) { }

  loadDashboard() {
    this.router.navigate(['/dashboard']);
  }

  ngOnInit(): void {
    this.pokemonService.getAllPokemons().subscribe(
      (pokemons: Pokemon[]) => {
        this.pokemons = pokemons;
        this.filteredPokemons = pokemons;
      }
    );
  }
  
  searchPokemon() {
    console.log("SQ " + this.searchQuery);
    if (!this.searchQuery.trim()) {
      this.filteredPokemons = this.pokemons;
      return;
    }

    const searchResult = this.pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      pokemon.id.toString().includes(this.searchQuery)
    );

    this.filteredPokemons = searchResult;
    return;
  }

  getPokemonImage(id: number): string {
    return this.pokemonService.getPokemonImage(id);
  }

  toggleFavoritesMode(): void {
    if (this.showFavorites) {
      this.filteredPokemons = [...this.pokemons];
    } else {
      this.filteredPokemons = this.pokemons.filter(pokemon => pokemon.favorite);
    }
    this.showFavorites = !this.showFavorites;
  }

  onMouseEnter(pokemon: any): void {
    if (!this.showFavorites && !pokemon.favorite) {
      pokemon.showFavoriteButton = true;
    }
  }

  onMouseLeave(): void {
    this.filteredPokemons.forEach(pokemon => {
      pokemon.showFavoriteButton = false;
    });
  }

  addToFavorites(pokemon: Pokemon) {
    this.pokemonService.addToFavorites(pokemon);
    this.favoritePokemons = this.pokemonService.getAllFavorites();
  }

  removeFromFavorites(pokemon: Pokemon) {
    this.pokemonService.removeFromFavorites(pokemon);
    this.favoritePokemons = this.pokemonService.getAllFavorites();
  }
  
  viewPokemonDetails(pokemonId: number): void {
    this.router.navigate(['/pokemon', pokemonId]);
  }
}
