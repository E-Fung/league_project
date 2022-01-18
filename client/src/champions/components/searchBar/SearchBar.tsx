import React, { useState } from 'react';
import './searchBar.css';
import { useSearchParams } from 'react-router-dom';
import { Tag } from './../../../model/championModel';

const filterTags = 'px-2';

const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [menuState, setMenustate] = useState<Tag>(Tag.All);

  const setParams = (inputTag: string | null, inputFilter: string | null): void => {
    let tag: string | null = inputTag === 'updatingFilter' ? searchParams.get('tag') : inputTag;
    let filter: string | null = inputFilter === 'updatingTag' ? searchParams.get('filter') : inputFilter;
    //only use the search param when the other is being updated
    if (filter && tag) {
      setSearchParams({ tag, filter });
    } else if (filter && !tag) {
      setSearchParams({ filter });
    } else if (!filter && tag) {
      setSearchParams({ tag });
    } else {
      setSearchParams({});
    }
  };

  const FilterTags = (): JSX.Element => {
    return (
      <>
        <p className={filterTags}>
          <button
            className={`font-bold text-2xl ${searchParams.get('tag') == Tag.All ? 'text-black' : 'text-slate-400'}`}
            onClick={() => {
              setParams(Tag.All, 'updatingTag');
              setMenustate(Tag.All);
            }}
          >
            {Tag.All}
          </button>
        </p>
        <p className={filterTags}>
          <button
            className={`font-bold text-2xl ${searchParams.get('tag') == Tag.Assassin ? 'text-black' : 'text-slate-400'}`}
            onClick={() => {
              setParams(Tag.Assassin, 'updatingTag');
              setMenustate(Tag.Assassin);
            }}
          >
            {Tag.Assassin}
          </button>
        </p>
        <p className={filterTags}>
          <button
            className={`font-bold text-2xl ${searchParams.get('tag') == Tag.Fighter ? 'text-black' : 'text-slate-400'}`}
            onClick={() => {
              setParams(Tag.Fighter, 'updatingTag');
              setMenustate(Tag.Fighter);
            }}
          >
            {Tag.Fighter}
          </button>
        </p>
        <p className={filterTags}>
          <button
            className={`font-bold text-2xl ${searchParams.get('tag') == Tag.Mage ? 'text-black' : 'text-slate-400'}`}
            onClick={() => {
              setParams(Tag.Mage, 'updatingTag');
              setMenustate(Tag.Mage);
            }}
          >
            {Tag.Mage}
          </button>
        </p>
        <p className={filterTags}>
          <button
            className={`font-bold text-2xl ${searchParams.get('tag') == Tag.Marksman ? 'text-black' : 'text-slate-400'}`}
            onClick={() => {
              setParams(Tag.Marksman, 'updatingTag');
              setMenustate(Tag.Marksman);
            }}
          >
            {Tag.Marksman}
          </button>
        </p>
        <p className={filterTags}>
          <button
            className={`font-bold text-2xl ${searchParams.get('tag') == Tag.Support ? 'text-black' : 'text-slate-400'}`}
            onClick={() => {
              setParams(Tag.Support, 'updatingTag');
              setMenustate(Tag.Support);
            }}
          >
            {Tag.Support}
          </button>
        </p>
        <p className={filterTags}>
          <button
            className={`font-bold text-2xl ${searchParams.get('tag') == Tag.Tank ? 'text-black' : 'text-slate-400'}`}
            onClick={() => {
              setParams(Tag.Tank, 'updatingTag');
              setMenustate(Tag.Tank);
            }}
          >
            {Tag.Tank}
          </button>
        </p>
      </>
    );
  };
  return (
    <div className="flex justify-center">
      <input
        className="w-1/6"
        value={searchParams.get('filter') || ''}
        placeholder="Search"
        onChange={(event) => {
          let filter = event.target.value;
          setParams('updatingFilter', filter);
        }}
      />
      <div className="hidden md:flex">
        <FilterTags />
      </div>
      <div className="relative flex md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>{menuState}</button>
        {menuOpen && (
          <div className="flex justify-end items-end flex-col absolute top-16 right-0 bg-purple-900">
            <FilterTags />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
