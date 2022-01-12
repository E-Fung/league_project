import React, { useEffect, useState, useCallback } from 'react';
import SearchBar from './components/searchBar/SearchBar';
import ChampionCard from './components/championCard/ChampionCard';
import { getChampionList } from '../service/championService';
import { ApiListChampModel, ChampModel } from './../model/championModel';
import { useSearchParams, useLocation } from 'react-router-dom';

const filterTag = 'px-4';

const FilterTags = (): JSX.Element => {
  return (
    <>
      <p className={filterTag}>
        <button>All</button>
      </p>
      <p className={filterTag}>
        <button>Assassin</button>
      </p>
      <p className={filterTag}>
        <button>Fighters</button>
      </p>
      <p className={filterTag}>
        <button>Mages</button>
      </p>
      <p className={filterTag}>
        <button>Marksmen</button>
      </p>
      <p className={filterTag}>
        <button>Support</button>
      </p>
      <p className={filterTag}>
        <button>Tank</button>
      </p>
    </>
  );
};

const Champions = () => {
  const [championList, setChampionList] = useState<ChampModel[]>();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    loadChampionList();
  }, []);

  const loadChampionList = async (): Promise<void> => {
    let tempChampListRaw: ApiListChampModel = await getChampionList();
    let tempChampArray: ChampModel[] = Object.keys(tempChampListRaw.data.data).map((key) => tempChampListRaw.data.data[key]);
    setChampionList(tempChampArray);
  };

  return (
    <div className="justify-center">
      <div className="flex justify-center my-4">
        <input
          value={searchParams.get('filter') || ''}
          onChange={(event) => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
        <FilterTags />
      </div>
      <div className="container mx-auto px-20 md:px-60">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {championList &&
            championList
              .filter((champ) => {
                let filter = searchParams.get('filter');
                if (!filter) return true;
                let name = champ.id.toLowerCase();
                return name.startsWith(filter.toLowerCase());
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
