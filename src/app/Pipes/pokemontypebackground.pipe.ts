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
      dragon: "#FF8C00",
      electric: "#d1ab19",
      fairy: "#FF0069",
      fighting: "#30336b",
      fire: "#f0932b",
      flying: "#33a3a3",
      grass: "#00b894",
      ground: "#d69a2b",
      ghost: "#a55eea",
      ice: "#74b9ff",
      normal: "#798e9c",
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
