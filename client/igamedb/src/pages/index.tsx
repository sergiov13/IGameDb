import type { NextPage } from "next";
import Link from 'next/link';
import React from "react";
import { useFetchGames, useFetchPopular } from "@/../api/fetchHook";
//OWN Components
import Hero from "@/components/Hero/Hero";
import Header from "@/components/Header/Header";
import Grid from "@/components/Grid/Grid";
import Card from "@/components/Card/Card";
import Spinner from "@/components/Spinner/Spinner";
import { RAPIDAPI_IMAGE_BASE_URL } from "../../config";


const Home: NextPage = () => {
  const [query, setQuery] = React.useState("");
  const { data, isLoading, isFetching, error } = useFetchPopular();
  // const { data, isLoading, isFetching, error } = useFetchGames(query);
  
  if (isLoading) {
    return <h2> Loading</h2>
  }
  if (data) {
    console.log(data[0].images.box.og);
  }
  return (
    <main className="relative h-screen overflow-y-scroll">
    <Header setQuery={setQuery} />
      {!query && data ? (
        <Hero imgUrl={data[0].images.box.og ? RAPIDAPI_IMAGE_BASE_URL+'game/1548/o/mczHwCVT.jpg' : '/no_image.jpg'}
        name={"The Legend of Zelda: Breath of the Wild"}
        id={"Step into a world of discovery, exploration, and adventure in The Legend of Zelda: Breath of the Wild, a boundary-breaking new game in the acclaimed series. Travel across vast fields, through forests, and to mountain peaks as you discover what has become of the kingdom of Hyrule in this stunning Open-Air Adventure. Now on the Nintendo Switch console, your journey is freer and more open than ever. Take your system anywhere, and adventure as Link any way you like."}
        />
      ) : null} 
      <Grid 
      className='p-4 max-w-7xl m-auto' 
      name={data ? data[0].name : "Name"}>
        {data ? data.map(game => (
          <Link key={game.id} href={`${game.id}`}>
          <div className='cursos-pointer hover:opacity-80 duration-300'>
            <Card
              imgUrl={game.images.box.og ? RAPIDAPI_IMAGE_BASE_URL+game.images.box.og : '/no_image.jpg'}
              name={game.name}
              subtitle = {game.images.box.og}/>
          </div>
          </Link>
          )) : null}
      </Grid>
      { isLoading || isFetching ? <Spinner /> : null }
    </main>
  )
};

export default Home;