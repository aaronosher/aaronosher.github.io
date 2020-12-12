import React, { Component } from "react";
import { Link } from "gatsby";
import {
  navigation,
  active,
} from "../assets/scss/components/Navigation.module.scss";

class Navigation extends Component {
  render() {
    return (
      <div className={navigation}>
        <Link to="/" activeClassName={active}>
          About
        </Link>
        <Link to="/projects" activeClassName={active}>
          Projects
        </Link>
        <Link to="/activities" activeClassName={active}>
          Activities
        </Link>
        <a href="/AaronOsherCV.pdf" target="_blank" rel="norefferer noopener">
          CV
        </a>
      </div>
    );
  }
}

export default Navigation;
