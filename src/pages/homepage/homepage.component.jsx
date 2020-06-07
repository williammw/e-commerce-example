import React from 'react';
import './homepage.styles.scss'
import Directory from '../../components/directory/directory.component.jsx';
import {  HomePageContainer } from './homepage.styled'


const HomePage = props => (
  <HomePageContainer>
    <Directory />
  </HomePageContainer>      
);

export default HomePage;