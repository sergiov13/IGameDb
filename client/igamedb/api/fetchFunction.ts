import { GameSearchResults, Game, GamePopulars } from "./types";
//import key and url
import { RAPID_API_POPULAR_BASE_URL, RAPID_API_KEY, RAPID_API_SEARCH_BASE_URL, RAPID_API_HOST } from "../config"

export const basicFetch = async <returnType>(endpoint: string): Promise<returnType> => {
  
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': RAPID_API_KEY,
      'X-RapidAPI-Host': RAPID_API_HOST
    },
    next: { revalidate: 43200 }
  };
  
  const response = await fetch(endpoint, options)
  if(!response.ok) throw new Error("Error fetching");
  const data = await response.json();
  return data;
};

//FETCH FUNCTIONS

export const fetchGames = async (search:string): Promise<GameSearchResults[]> => {
  const url = RAPID_API_SEARCH_BASE_URL+search
  return await basicFetch<GameSearchResults[]>(url);
};

export const fetchPopular = async (search:string): Promise<GamePopulars[]> => {
  let url = RAPID_API_POPULAR_BASE_URL
  if (search.length > 0){
    url = RAPID_API_SEARCH_BASE_URL+search
  }
  return await basicFetch<GamePopulars[]>(url);
}