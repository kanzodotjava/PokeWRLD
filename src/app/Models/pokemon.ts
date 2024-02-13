export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: string[];
  family: string;
  favorite: boolean; 
  showFavoriteButton: boolean;
}
