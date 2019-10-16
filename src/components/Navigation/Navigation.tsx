import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { navigation, active } from './Navigation.module.scss';

class Navigation extends Component {
  render() {
    return (
      <div className={navigation}>
        <NavLink to="/" exact activeClassName={active}>About</NavLink>
        <NavLink to="/projects" activeClassName={active}>Projects</NavLink>
        <NavLink to="/activities" activeClassName={active}>Activities</NavLink>
        <a href="/AaronOsherCV.pdf" target="_blank" rel="norefferer noopener">CV</a>
      </div>
    );
  }
}

export default Navigation;
