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
    console.log("SQ "+this.searchQuery);
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
}
