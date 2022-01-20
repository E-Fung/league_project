import { ApiListChampModel } from './../model/championModel';
import axios from 'axios';

export const createChampion = async () => {
  let pp = await axios.get('https://ddragon.leagueoflegends.com/cdn/12.2.1/data/en_US/champion/Aatrox.json');
  console.log(pp.data.data.Aatrox);
  return axios.post('http://localhost:5000/champions', pp.data.data.Aatrox);
};

export const getChampionList = (): Promise<ApiListChampModel> => {
  return axios.get('http://ddragon.leagueoflegends.com/cdn/12.1.1/data/en_US/champion.json').then((resp: any) => resp);
};

//I want the site to get the champion data from the server on the champion page, the only things stored on redux is the saved champions and items
