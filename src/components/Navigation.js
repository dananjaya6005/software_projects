import React from 'react';
import { NavLink } from 'react-router-dom';
import Home from '../screens/Home';
import About from '../screens/About';
import '../components/Navigation.css';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to ="/">Project Info</NavLink></li>
        <li><NavLink to ="/github">Github</NavLink></li>
        <li><NavLink to ="/about">About</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navigation;
