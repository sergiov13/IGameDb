//Configuration for IGDB_API

const RAWG_API_KEY : string | undefined =process.env.RAWG_API_KEY;
const RAWG_API_KEY_URL: string = '?key='+{RAWG_API_KEY};

const RAWG_SEARCH_BASE_URL: string = ''
const RAWG_POPULAR_BASE_URL: string = ''

const rawGameUrl = (id?:string) => ``

//Configuration for OPENCRITIC_API
const X_RAPIDAPI_KEY: string | undefined = process.env.X_RAPIDAPI_KEY
const RAPID_API_KEY: string =  `${X_RAPIDAPI_KEY}`
const RAPID_API_URL: string = 'https://opencritic-api.p.rapidapi.com/';
const RAPID_API_HOST: string =  'opencritic-api.p.rapidapi.com';

const RAPID_API_SEARCH_BASE_URL: string = `${RAPID_API_URL}game/search?criteria=`;
const RAPID_API_POPULAR_BASE_URL: string = `${RAPID_API_URL}game/popular`;

const rapidApiGameUrl = (id?:string) => `${RAPID_API_URL}game/`+id

const RAPID_API_IMAGE_BASE_URL: string = 'https://img.opencritic.com/';
//images: masthead: og (banner)
//images: box: og (card)
export {
  RAWG_API_KEY_URL,
  rawGameUrl,
  RAPID_API_HOST,
  RAPID_API_KEY,
  RAPID_API_SEARCH_BASE_URL,
  RAPID_API_POPULAR_BASE_URL,
  RAPID_API_IMAGE_BASE_URL,
  rapidApiGameUrl,
}