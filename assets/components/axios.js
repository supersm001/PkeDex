import axios from 'axios';

export const AxiosInstance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon',
  timeout: 300000,
});
