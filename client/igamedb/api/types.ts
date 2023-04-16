export type Game = {
  name: string;
  id: number;
  description: string;
  percentRecommended: string;
  medianScore: string;
  firstReleaseDate: string;
  Rating: string;
  Platforms: Platform[];
  Genres: Genre[];
  images: images;
  Companies: Companies[];
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

export type images ={
  box: box;
  masthead: masthead;
  screenshots: screenshots;
  banner: banner;
}
export type box = {
  box: og;
}
export type og = {
  og:string;
}
export type sm = {
  sm:string;
}
export type masthead = {
  og: og;
}
export type screenshots = {
  og: og;
}
export type banner = {
  og: og;

}
