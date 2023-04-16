//Configuration for IGDB_API

const X_API_KEY_IGDB: string | undefined =process.env.API_KEY_IGDB;
const X_API_KEY_URL: string = 'https://api.igdb.com/v4';

const SEARCH_IGDB_BASE_URL: string = ''
const POPULAR_IGDB_BASE_URL: string = ''

const igdbGameUrl = (id?:string) => ``

//Configuration for OPENCRITIC_API
const X_RAPIDAPI_KEY:  string | undefined = process.env.API_KEY_RAPIDAPI ;
const RAPIDAPI_KEY: string =  `${X_RAPIDAPI_KEY}`
const X_RAPIDAPI_URL: string = 'https://opencritic-api.p.rapidapi.com/';
const X_RAPIDAPI_HOST: string =  'opencritic-api.p.rapidapi.com';

const SEARCH_RAPIDAPI_BASE_URL: string = `${X_RAPIDAPI_URL}game/search?criteria=`;
const POPULAR_RAPIDAPI_BASE_URL: string = `${X_RAPIDAPI_URL}game/popular`;

const rapidApiGameUrl = (id?:string) => `${X_RAPIDAPI_URL}game/`+id

const RAPIDAPI_IMAGE_BASE_URL: string = 'https://img.opencritic.com/';
//images: masthead: og (banner)
//images: box: og (card)
export {
  X_API_KEY_IGDB,
  X_API_KEY_URL,
  SEARCH_IGDB_BASE_URL,
  POPULAR_IGDB_BASE_URL,
  igdbGameUrl,
  igdbCreditsUrl,
  RAPIDAPI_KEY,
  X_RAPIDAPI_URL,
  X_RAPIDAPI_HOST,
  SEARCH_RAPIDAPI_BASE_URL,
  POPULAR_RAPIDAPI_BASE_URL,
  RAPIDAPI_IMAGE_BASE_URL,
  rapidApiGameUrl,
  rapidApiCreditsUrl
}