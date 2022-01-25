import React, { useEffect, useState } from 'react';
import ChampionCard from './components/championCard/ChampionCard';
import { getChampionList } from '../service/championService';
import { ApiListChampModel, ChampModel, Tag } from './../model/championModel';
import { useSearchParams } from 'react-router-dom';
import SearchBar from './components/searchBar/SearchBar';

const Champions = () => {
  const [championList, setChampionList] = useState<ChampModel[]>();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    loadChampionList();
  }, []);

  const loadChampionList = async (): Promise<void> => {
    let tempChampListRaw: ApiListChampModel = await getChampionList();
    let tempChampArray: ChampModel[] = Object.keys(tempChampListRaw.data.data).map((key) => tempChampListRaw.data.data[key]); //transforms the object into array of objects
    console.log(tempChampArray);
    setChampionList(tempChampArray);
  };

  return (
    <div className="justify-center">
      <div className="m-4">
        <SearchBar />
      </div>
      <div id="champlist__container" className="container mx-auto px-10 md:px-20 lg:px-40">
        <div className="justify-center flex flex-wrap -mx-1 lg:-mx-4">
          {championList &&
            championList
              .filter((champ) => {
                let filter = searchParams.get('filter');
                if (!filter) return true;
                let name = champ.name.toLowerCase();
                return name.startsWith(filter.toLowerCase());
              })
              .filter((champ) => {
                let tag: any = searchParams.get('tag');
                if (tag === Tag.All || !tag) return true;
                let champTags = champ.tags;
                return champTags.includes(tag);
              })
              .map((champ) => {
                return <ChampionCard ChampData={champ} key={champ.id} />;
              })}
        </div>
      </div>
    </div>
  );
};

export default Champions;
