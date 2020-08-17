import React from 'react';
import logo from './logo.svg';
import './App.css';
import Row from  './Row';
import requests from './Requests';
import Banner from './Banner';

function App() {
  return (
    <div className="app">
      <Banner />
      <Row title="Clone NETFLIX ORGINALS" fetchUrl={requests.fetchNetflixOrginals} isLargeRow/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaties" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
