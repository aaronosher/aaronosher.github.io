import React, { Component } from 'react';
import { navigation} from './Navigation.module.scss';

class Navigation extends Component {
  render() {
    return (
      <div className={navigation}>
        <a href="#">About</a>
        <a href="#">Projects</a>
        <a href="#">Activities</a>
        <a href="#">CV</a>
      </div>
    );
  }
}

export default Navigation;
