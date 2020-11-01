import React from 'react';
import logo from './logo.svg';
import './App.css';
import requests from './Request';
import Row from './Row';
import instance from './Axios';
import Banner from './Banner';
import Nav from './Nav';

const App = () => {
  return (
    <>
      <Nav/>
      <Banner
        title="NetflixOriginals"
        fetchURL={requests.fetchNetflixOriginals}
      />
    
    <Row title="NetlixOriginals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} />
    <Row title="TrendingNow" fetchUrl={requests.fetchTrending} />
    <Row title="TopRated" fetchUrl={requests.fetchTopRated}/>
    <Row title="ActionMovies" fetchUrl={requests.fetchActionMovies}/>
    <Row title="ComedyMovies" fetchUrl={requests.fetchComedyMovies} />
    
      
    
      
    
     
    </>
  );
  
}




export default App;
