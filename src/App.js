import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.js';
import {Switch, Route } from 'react-router-dom';


const HstsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

const TopicList = () => (
  <div>
    <h1>Topic PAGE</h1>
  </div>
)


const TopicDetail = (props) => { 
  console.log(props)
  return (
  
  <div>
      <h1>TopicDetail details {props.match.params.TopicDetailId}</h1>
  </div>
)
}

function App() {
  return (
    <div >
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HstsPage} />
        <Route exact path='/topicDetail' component={TopicList} />
        <Route path='/topicDetail/:TopicDetailId' component={TopicDetail} />
      </Switch>
      
     {/* <HomePage /> */}
    </div>
  );
}

export default App
