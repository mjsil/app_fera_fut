import axios from 'axios';

import { key } from '../config/api_key';

export const api = axios.create({
  baseURL: 'https://v3.football.api-sports.io/',
  headers: {
		'x-rapidapi-host': 'v3.football.api-sports.io',
		'x-rapidapi-key': `${key}`
	}
});
