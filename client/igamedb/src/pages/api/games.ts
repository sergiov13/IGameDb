import type {  NextApiRequest, NextApiResponse } from 'next';
// api URLS

import { RAPID_API_POPULAR_BASE_URL, RAPID_API_SEARCH_BASE_URL } from '../../../config';
import { basicFetch } from '../../../api/fetchFunction';

import type { Game } from '../../../api/types';

export default async function handler(req: NextApiRequest, res: NextApiResponse<Game>) {
  const { search } = req.query; //grap search params

  const endpoint = search ?  `${RAPID_API_SEARCH_BASE_URL}${search}` :RAPID_API_POPULAR_BASE_URL;
  // console.log(endpoint);
  // console.log("=================================================================================================================================================")
  const data = await basicFetch<Game>(endpoint);
  res.status(200).json(data);
};