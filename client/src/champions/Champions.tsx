import React, { useEffect, useState } from 'react';
import SearchBar from './components/searchBar/SearchBar';
import ChampionCard from './components/championCard/ChampionCard';
import { getChampionList } from '../service/championService';
import { ChampionsModelApi } from './../model/championModel';

const Champions = () => {
  const [championList, setChampionList] = useState<any>();

  useEffect(() => {
    console.log('loading champion list');
    loadChampionList();
  }, []);

  const loadChampionList = async (): Promise<void> => {
    let tempChampionList: ChampionsModelApi = await getChampionList();
    let temp = tempChampionList.data.data;
    console.log(temp['Aatrox']);
    setChampionList(tempChampionList);
  };

  return (
    <div>
      <SearchBar />
      <ChampionCard />
    </div>
  );
};

export default Champions;
