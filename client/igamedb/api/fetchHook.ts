// import { useInfiniteQuery } from "@tanstack/react-query";

import { useQuery } from "@tanstack/react-query";
import { fetchGames, fetchPopular } from "./fetchFunction";

export const useFetchGames = (search: string) => {
  const data = useQuery(['Games',search],() => fetchGames(search), {retry: false})
  return data  
}

export const useFetchPopular = (search: string) => {
  const data = useQuery(['Games', search],() => fetchPopular(search), {retry: false});
  return data;
}

// export const useFetchGame = (id: number) => {
//   return useQuery(['Game', id],() => fetchGame(id), {retry: false})  ;
// }

