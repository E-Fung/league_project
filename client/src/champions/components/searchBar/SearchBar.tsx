import React from 'react';
import './searchBar.css';
import { useSearchParams, useLocation } from 'react-router-dom';

const SearchBar = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  return (
    <div>
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
    </div>
  );
};

export default SearchBar;
