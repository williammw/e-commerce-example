import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.js';
import {Switch, Route, Link } from 'react-router-dom';
import ShopPage from './pages/shop/shoppage.js';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}
export default App;