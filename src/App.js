import './App.css';

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/header/header.component.js';
import HomePage from './pages/homepage/homepage.js';
import ShopPage from './pages/shop/shoppage.component.js';



function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}
export default App; 