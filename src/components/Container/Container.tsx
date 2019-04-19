import React, { Component, Fragment } from 'react';
import './Container.scss';
import Navigation from '../Navigation/Navigation';
// import Particles, { IParticlesParams } from 'react-particles-js';
// import particlesConfigJson from '../../resources/particlesjs-config.json';

// const particlesConfig = particlesConfigJson as IParticlesParams;

class App extends Component {
  render() {
    const { children } = this.props;

    return (
      <React.Fragment>
        {/* <Particles params={particlesConfig} className="particlesBg" width="100vw" height="100vh" /> */}
        <Navigation />
        <div className="App">
          {children}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
