import type {  NextApiRequest, NextApiResponse } from 'next';
// api URLS

import { POPULAR_RAPIDAPI_BASE_URL, SEARCH_RAPIDAPI_BASE_URL } from '../../../config';
import { basicFetch } from '../../../api/fetchFunction';

import type { Game } from '../../../api/types';

export default async function handler(req: NextApiRequest, res: NextApiResponse<Game>) {
  const { search } = req.query; //grap search params

  const endpoint = search ?  `${SEARCH_RAPIDAPI_BASE_URL}${search}` :POPULAR_RAPIDAPI_BASE_URL;
  // console.log(endpoint);
  // console.log("=================================================================================================================================================")
  const data = await basicFetch<Game>(endpoint);
  res.status(200).json(data);
};