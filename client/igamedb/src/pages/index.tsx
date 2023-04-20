import type { NextPage } from "next";
import Link from 'next/link';
import React from "react";
import { useFetchPopular } from "@/../api/fetchHook";
//OWN Components
import Hero from "@/components/Hero/Hero";
import Header from "@/components/Header/Header";
import Grid from "@/components/Grid/Grid";
import Card from "@/components/Card/Card";
import Spinner from "@/components/Spinner/Spinner";
import SearchResults from "@/components/SearchResults/SearchResults";

import { RAPID_API_IMAGE_BASE_URL } from "../../config";


const Home: NextPage = () => {
  const [query, setQuery] = React.useState("");
  const { data, isLoading, isFetching, error } = useFetchPopular(query);

  // if (error) return <div> Something went wrong </div>
  return (
    <main className="relative h-screen overflow-y-scroll ">
      <Header setQuery={setQuery} />
      {!query && data && data[0].images ? (
        <Hero imgUrl={data[0].images.box?.og ? RAPID_API_IMAGE_BASE_URL + 'game/1548/o/mczHwCVT.jpg' : '/no_image.jpg'}
          name={"The Legend of Zelda: Breath of the Wild"}
          description={"Step into a world of discovery, exploration, and adventure in The Legend of Zelda: Breath of the Wild, a boundary-breaking new game in the acclaimed series. Travel across vast fields, through forests, and to mountain peaks as you discover what has become of the kingdom of Hyrule in this stunning Open-Air Adventure. Now on the Nintendo Switch console, your journey is freer and more open than ever. Take your system anywhere, and adventure as Link any way you like."}
        />
      ) : null}
      {/* Shows Grid  if no data or search, if there is data and or search it will show results*/}
      {!query && data ?
      <Grid
        className='p-4 max-w-7xl m-auto'
        name={data ? "Popular Games" : ""}>
        {data ? data.map(game => (
          <Link key={game.id} href={`${game.id}`}>
            <div className='cursos-pointer hover:opacity-80 duration-300'>
              <Card
                imgUrl={game.images?.box.og ? RAPID_API_IMAGE_BASE_URL + game.images.box.og : '/no_image.jpg'}
                name={game.name} />
            </div>
          </Link>
        )) : null}
      </Grid> :
        <div className="justify-center w-full h-full m-auto max-w-lg px-4">
          {query && !data || isLoading ? <Spinner /> : (<h2 className="text-center mb-2 mt-0 text-4xl font-medium leading-tight text-primary p-8" >Results</h2>)}
          <ul >
            {data ? data.map(game => (
              <Link className="block w-30 cursor-pointer rounded-lg p-4 transition duration-400 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200" key={game.id} href={`${game.id}`} >
                <SearchResults name={game.name} />
              </Link>
            )) : null}
          </ul>
        </div>
      }
      {isLoading || isFetching ? <Spinner /> : null}
    </main>
  )
};

export default Home;