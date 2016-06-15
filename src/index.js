import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';

const App = () => {
  return (
  <div>
    <SearchBar />
  </div>
);
};



ReactDOM.render(<App />, document.querySelector('.container'));
