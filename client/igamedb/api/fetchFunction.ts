import { GameSearchResults, Game, GamePopulars } from "./types";
//import key and url
import { POPULAR_RAPIDAPI_BASE_URL, X_RAPIDAPI_KEY, SEARCH_RAPIDAPI_BASE_URL, X_RAPIDAPI_HOST, X_RAPIDAPI_URL } from "../config"

export const basicFetch = async <returnType>(endpoint: string): Promise<returnType> => {
  
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': X_RAPIDAPI_KEY,
      'X-RapidAPI-Host': X_RAPIDAPI_HOST
    }
  };

  console.log(endpoint);
  const response = await fetch(endpoint, options)
  console.log(response);
  if(!response.ok) throw new Error("Error fetching");

  const data = await response.json();
  return data;
};

//FETCH FUNCTIONS

export const fetchGames = async (search:string): Promise<GameSearchResults[]> => {
  const url = SEARCH_RAPIDAPI_BASE_URL+search
  return await basicFetch<GameSearchResults[]>(url);
};

// export const fetchGame = async (id:number): Promise<Game> => {
//   const url = X_RAPIDAPI_URL+"game/"+id
//   return await basicFetch<Game>(url);
// }

export const fetchPopular = async (): Promise<GamePopulars[]> => {
  const url = POPULAR_RAPIDAPI_BASE_URL
  return await basicFetch<GamePopulars[]>(url);
}