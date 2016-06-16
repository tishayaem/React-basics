import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
var API_KEY = process.env.API_TOKEN;


class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

  YTSearch({key: API_KEY, term: 'pianocat'}, (data) => {
    this.setState({ videos: data});
  });
}

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.querySelector('.container'));
