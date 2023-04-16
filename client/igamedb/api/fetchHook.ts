// import { useInfiniteQuery } from "@tanstack/react-query";

import { useQuery } from "@tanstack/react-query";
import { fetchGames, fetchPopular } from "./fetchFunction";

export const useFetchGames = (search: string) => {
  return useQuery(['Games',search],() => fetchGames(search), {retry: false})
}

export const useFetchPopular = () => {
  return useQuery(['Games','Popular'],() => fetchPopular(), {retry: false});
}

// export const useFetchGame = (id: number) => {
//   return useQuery(['Game', id],() => fetchGame(id), {retry: false})  ;
// }

