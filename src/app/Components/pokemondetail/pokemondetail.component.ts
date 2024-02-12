import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../../Models/pokemon';
import { PokemonService } from '../../Services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemondetail.component.html',
  styleUrls: ['./pokemondetail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  pokemonId!: number;
  pokemon!: Pokemon;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.pokemonId = +params['id'];
      this.loadPokemonDetails();
    });
  }

  loadPokemonDetails() {
    this.pokemonService.getPokemonById(this.pokemonId).subscribe(
      (pokemon: Pokemon) => {
        this.pokemon = pokemon;
      },
      (error) => {
        console.error('Failed to load pokemon details:', error);
      }
    );
  }

  goBack() {
    this.router.navigate(['/pokemons']);
  }

  getPokemonImage(id: number): string {
    return this.pokemonService.getPokemonImage(id);
  }

}
