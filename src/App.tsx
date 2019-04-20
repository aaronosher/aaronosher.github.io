import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import AboutPage from './pages/About/About';
import ProjectsPage from './pages/Projects/Projects';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={AboutPage} />
          <Route path="/projects" component={ProjectsPage} />
          <Route component={AboutPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
