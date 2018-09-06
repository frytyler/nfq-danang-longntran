import React from 'react';

const defaultSearchCtx = {
  onSearch: () => {},
};
const SearchContext = React.createContext(defaultSearchCtx);
export default SearchContext;
