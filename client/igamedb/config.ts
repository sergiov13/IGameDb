//Configuration for OPENCRITIC_API
const NEXT_PUBLIC_X_RAPIDAPI_KEY: string | undefined = process.env.NEXT_PUBLIC_API_KEY_RAPIDAPI
const RAPID_API_KEY: string =  `${NEXT_PUBLIC_X_RAPIDAPI_KEY}`
const RAPID_API_URL: string = 'https://opencritic-api.p.rapidapi.com/';
const RAPID_API_HOST: string =  'opencritic-api.p.rapidapi.com';

const RAPID_API_SEARCH_BASE_URL: string = `${RAPID_API_URL}game/search?criteria=`;
const RAPID_API_POPULAR_BASE_URL: string = `${RAPID_API_URL}game/popular`;

const rapidApiGameUrl = (id?:string) => `${RAPID_API_URL}game/`+id

const RAPID_API_IMAGE_BASE_URL: string = 'https://img.opencritic.com/';
//images: masthead: og (banner)
//images: box: og (card)
export {
  RAPID_API_HOST,
  RAPID_API_KEY,
  RAPID_API_SEARCH_BASE_URL,
  RAPID_API_POPULAR_BASE_URL,
  RAPID_API_IMAGE_BASE_URL,
  rapidApiGameUrl,
}