import React from 'react';
import logo from './logo.svg';
import './App.css';
import Row from  './Row';
import requests from './Requests';

function App() {
  return (
    <div className="App">
      <h1>Chirs Netflix</h1>
      <Row title="Clone NETFLIX ORGINALS" fetchUrl={requests.fetchNetflixOrginals}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App;
