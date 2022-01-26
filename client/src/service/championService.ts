import { ApiListChampModel } from './../model/championModel';
import axios from 'axios';

export const createChampion = async () => {
  let pp = await axios.post('http://localhost:5000/tags', { champion_id: 'Aatrox' });
  console.log(pp.data);
  // return axios.post('http://localhost:5000/allytips', pp.data.data.Aatrox);
};

export const getChampionList = (): Promise<ApiListChampModel> => {
  return axios.get('http://ddragon.leagueoflegends.com/cdn/12.1.1/data/en_US/champion.json').then((resp: any) => resp);
};

//I want the site to get the champion data from the server on the champion page, the only things stored on redux is the saved champions and items
