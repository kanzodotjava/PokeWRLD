// pokemon.model.ts
export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: string[];
  family: string;
  favorite: boolean; // Adicionando a propriedade favorite
  showFavoriteButton: boolean;
}
