import { Pipe, PipeTransform } from '@angular/core';

interface TypeColor {
  [key: string]: string;
}

@Pipe({
  name: 'pokemonTypeBackground'
})
export class PokemonTypeBackgroundPipe implements PipeTransform {

  transform(type: string): any {
    const typeColor: TypeColor = {
      bug: "#26de81",
      dragon: "#ffeaa7",
      electric: "#fed330",
      fairy: "#FF0069",
      fighting: "#30336b",
      fire: "#f0932b",
      flying: "#81ecec",
      grass: "#00b894",
      ground: "#EFB549",
      ghost: "#a55eea",
      ice: "#74b9ff",
      normal: "#95afc0",
      poison: "#6c5ce7",
      psychic: "#a29bfe",
      rock: "#2d3436",
      water: "#0190FF",
    };

    return {
      'background-color': typeColor[type.toLowerCase()] || '#ccc'
    };
  }

}
