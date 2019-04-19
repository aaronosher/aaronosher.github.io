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
        <NavLink to="/cv" activeClassName={active}>CV</NavLink>
      </div>
    );
  }
}

export default Navigation;
