import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import AboutPage from './pages/About/About';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={AboutPage} />
          <Route component={AboutPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
