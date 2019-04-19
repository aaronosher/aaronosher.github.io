import React, { Component, Fragment } from 'react';
import { App as AppStyles } from './Container.module.scss';
import Navigation from '../Navigation/Navigation';

class App extends Component {
  render() {
    const { children } = this.props;

    return (
      <React.Fragment>
        {/* <Particles params={particlesConfig} className="particlesBg" width="100vw" height="100vh" /> */}
        <Navigation />
        <div className={AppStyles}>
          {children}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
