import { rapidApiGameUrl, RAPIDAPI_IMAGE_BASE_URL } from '../../config';
// Basic fetch
import { basicFetch } from '../../api/fetchFunction';
// Components
import Header from '../components/Header/Header';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import GameInfo from '../components/GameInfo/GameInfo';
import Grid from '../components/Grid/Grid';
import Card from '../components/Card/Card';
// Types
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import type { Game, Platform, Companies, Genre } from '../../api/types';

type Props = {
  game: Game;
  companies: Companies[];
  platforms: Platform[];
  genre: Genre[];
};

const Game: NextPage<Props> = ({ game }) => (
  <main>
    {/* <Header /> */}
    <Breadcrumb name={game.name} />
    <GameInfo
      thumbUrl={game.images.box.og ? RAPIDAPI_IMAGE_BASE_URL+game.images.box.og : '/no_image.jpg'}
      // rating={game.Rating ? game.Rating : game.medianScore}
      year={game.firstReleaseDate.split('-')[0]}
      backgroundImgUrl={game.images.masthead ? RAPIDAPI_IMAGE_BASE_URL+game.images.masthead.og : RAPIDAPI_IMAGE_BASE_URL+game.images.banner.og}
      name={game.name}
      description={game.description}
      platforms={game.Platforms}
      companies={game.Companies}
      genres={game.Genres}
    />
    {/* <Grid className='p-4 max-w-7xl m-auto' title='Actors'>
      {cast.map(actor => (
        <Card
          key={actor.credit_id}
          imgUrl={actor.profile_path ? IMAGE_BASE_URL + POSTER_SIZE + actor.profile_path : '/no_image.jpg'}
          name={actor.name}
          subtitle={actor.character}
        />
      ))}
    </Grid> */}
  </main>
);

export default Game;

export const getStaticProps: GetStaticProps = async context => {
  const id = context.params?.id as string;

  const gameEndpoint: string = rapidApiGameUrl(id);
  // const creditsEndpoint: string = creditsUrl(id);

  const game = await basicFetch<Game>(gameEndpoint);
  // const credits = await basicFetch<Credits>(creditsEndpoint);

  // Get the directors only
  // const directors = credits.crew.filter(member => member.job === 'Director');
  // const companies = game.Companies;
  return {
    props: {
      game,
      // companies
    },
    revalidate: 60 * 60 * 24 // Re-build page every 24 hours
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  };
};
