export type Game = {
  name: string;
  id: number;
  description: string;
  percentRecommended: string;
  meadianScore: number;
  firstReleaseDate: string;
  Rating: string;
  Platforms: Platform[];
  Genres: Genre[];
}

export type Platform = {
  id: number;
  name: string;
  shortName: string;
  imageSrc: string;
  releaseDate: string;
}

export type Companies = {
  name: string;
  type: string;
}

export type Genre = {
  id: number;
  name: string;
} 

export type GameSearchResults = {
  id: number;
  name:string;
  dist:number;
}

export type GamePopulars = {
  topCriticScore: number;
  tier: string;
  name: string;
  id: number;
  images: box;
}

export type box = {
  box: any;
}

export type og = {
  og:string;
}
export type sm = {
  sm:string;
}