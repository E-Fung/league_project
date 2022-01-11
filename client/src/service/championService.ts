import { ChampionsModelApi } from './../model/championModel';
import axios from 'axios';

export const getChampionList = (): Promise<ChampionsModelApi> => {
  return axios.get('http://ddragon.leagueoflegends.com/cdn/12.1.1/data/en_US/champion.json').then((resp: any) => resp);
};

//I want the site to get the champion data from the server on the champion page, the only things stored on redux is the saved champions and items
