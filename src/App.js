import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.js';
import {Switch, Route, Link } from 'react-router-dom';


const HstsPage = () => (  
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

const TopicsList = props => (
  <div>
    <h1>Topic PAGE</h1>
    <Link to={`${props.match.url}/13`}> TO TOPIC !</Link>
    <Link to={`${props.match.url}/14`}> TO TOPIC !</Link>
    <Link to={`${props.match.url}/16`}> TO TOPIC !</Link>

  </div>
)


const TopicDetail = (props) => { 
  console.log(props)
  return (  
    <div>
        <h1>TopicDetail details {props.match.params.topicid}</h1>
    </div>
  )
}

function App() {   
  return (
    <div >
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HstsPage} />
        <Route exact path='/topics' component={TopicsList} />
        <Route path='/topics/:topicid' component={TopicDetail} />
      </Switch>
      
     {/* <HomePage /> */}
    </div>
  );
}

export default App
