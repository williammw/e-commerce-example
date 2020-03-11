import React from 'react';
import './homepage.scss'
import Directory from '../../components/directory/directory.js';
import {Route, Link } from 'react-router-dom';

const HomePage = props => (

    <div className='homepage'>
        {console.log(props)}
        <Link to="topics" >Topics</Link>
        {/* <Directory /> */}
        <button onClick={()=> props.history.push('/topics')}>Topics</button>
        <h1>Home Page</h1>
    </div>
);

export default HomePage;