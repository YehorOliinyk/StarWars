export interface IHeroItem {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: 'male' | 'female' | 'n/a';
  homeworld: string;
  films: Array<string>;
  species: Array<string>;
  vehicles: [];
  starships: [];
  created: string;
  edited: string;
  url: string;
}

export interface IHeroes {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<IHeroItem>;
}
