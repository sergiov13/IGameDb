import type {  NextApiRequest, NextApiResponse } from 'next';
// api URLS

import { POPULAR_RAPIDAPI_BASE_URL } from '../../../config';
import { basicFetch } from '../../../api/fetchFunction';

import type { GamePopulars } from '../../../api/types';

export default async function handler(req: NextApiRequest, res: NextApiResponse<GamePopulars[]>) {
  const { search } = req.query; //grap search params

  const endpoint = search ? `` : POPULAR_RAPIDAPI_BASE_URL;
  
  const data = await basicFetch<GamePopulars[]>(endpoint);
  res.status(200).json(data);
};
