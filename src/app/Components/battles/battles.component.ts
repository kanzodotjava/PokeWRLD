import { Component } from '@angular/core';
import { PokemonService } from '../../Services/pokemon.service';
import { Pokemon } from '../../Models/pokemon';
import { Router } from '@angular/router';


@Component({
  selector: 'app-battles',
  templateUrl: './battles.component.html',
  styleUrls: ['./battles.component.css']
})
export class BattlesComponent {
  pokemonA: string = '';
  pokemonB: string = '';
  battleResult: string = '';
  pokemonList: Pokemon[] = [];
  filteredPokemonListA: Pokemon[] = [];
  filteredPokemonListB: Pokemon[] = [];

  constructor(private pokemonService: PokemonService,
    private router: Router) { }

  ngOnInit(): void {
    this.pokemonService.getAllPokemons().subscribe(
      (pokemons: Pokemon[]) => {
        this.pokemonList = pokemons;
      }
    );
  }

  filterPokemonA(query: string): void {
    this.filteredPokemonListA = this.filterPokemonList(query);
  }

  filterPokemonB(query: string): void {
    this.filteredPokemonListB = this.filterPokemonList(query);
  }

  private filterPokemonList(query: string): Pokemon[] {
    if (query.trim() === '') {
      return [];
    }
    return this.pokemonList.filter(pokemon =>
      pokemon.name.toLowerCase().includes(query.toLowerCase()) ||
      pokemon.id.toString().includes(query)
    );
  }

  selectPokemonA(pokemon: Pokemon): void {
    this.pokemonA = pokemon.name;
    this.filteredPokemonListA = [];
  }

  selectPokemonB(pokemon: Pokemon): void {
    this.pokemonB = pokemon.name;
    this.filteredPokemonListB = [];
  }

  simulateBattle(): void {
    const winner = Math.random() < 0.5 ? this.pokemonA : this.pokemonB;
    this.battleResult = `${winner} wins the battle!`;
  }

  getPokemonImage(id: number): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }
  goToPokedex() {
    this.router.navigate(['/pokemons']);
  }


}
