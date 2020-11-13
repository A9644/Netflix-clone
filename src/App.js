import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home'
import Main from './Components/Main';

const App = () => {
  return (
    <>
      
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/Main" component={Main}></Route>


      </Switch>
      
    
      
    
     
    </>
  );
  
}




export default App;
