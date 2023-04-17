import { rapidApiGameUrl, RAPID_API_IMAGE_BASE_URL } from '../../config';
// Basic fetch
import { basicFetch } from '../../api/fetchFunction';
// Components
import Header from '../components/Header/Header';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import GameInfo from '../components/GameInfo/GameInfo';
// Types
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import type { Game, Platform, Companies, Genre } from '../../api/types';

type Props = {
  game: Game;
  companies: Companies[];
  platforms: Platform[];
  genre: Genre[];
};

const Game: NextPage<Props> = ({ game }) => {
  return(
  <main>
    <Header />
    <Breadcrumb name={game.name} />
    <GameInfo
      thumbUrl={game.images?.box?.og ? RAPID_API_IMAGE_BASE_URL+game.images.box?.og : '/no_image.jpg'}
      // rating={game.Rating ? game.Rating : game.medianScore}
      year={game.firstReleaseDate.split('-')[0]}
      backgroundImgUrl={game.images.masthead ? RAPID_API_IMAGE_BASE_URL+game.images.masthead.og : RAPID_API_IMAGE_BASE_URL+game.images.banner?.og}
      name={game.name}
      description={game.description}
      platforms={game.Platforms}
      companies={game.Companies}
      genres={game.Genres}
    />
  </main>
)};

export default Game;

export const getStaticProps: GetStaticProps = async context => {
  const id = context.params?.id as string;
  const gameEndpoint: string = rapidApiGameUrl(id);
  const game = await basicFetch<Game>(gameEndpoint);
  return {
    props: {
      game,
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
