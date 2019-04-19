import React, { Component, Fragment } from 'react';
import { App as AppStyles } from './Container.module.scss';

class App extends Component {
  render() {
    const { children } = this.props;

    return (
      <React.Fragment>
        {/* <Particles params={particlesConfig} className="particlesBg" width="100vw" height="100vh" /> */}
        <div className={AppStyles}>
          {children}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
