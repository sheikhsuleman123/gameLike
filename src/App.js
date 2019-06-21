import React from 'react';
import {BrowserRouter , Route } from 'react-router-dom';
import './App.css';

//Components
import Header from './component/Header/Header.js';
import Header2 from './component/Header/Header2.js';
import Home from './component/Home/home.js';
import PlayerPage from './component/PlayerPage/playerpage.js';

const  App = () => {
  return (
    
    <BrowserRouter>
     <header>
      <Header2/>
     </header>
    <Route path ="/" exact component={Home} />
    <Route path ="/playerpage" exact component={PlayerPage} />
    
      </BrowserRouter>
    
  );
}

export default App;
