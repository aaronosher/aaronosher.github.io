import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import AboutPage from './pages/About/About';
import ProjectsPage from './pages/Projects/Projects';
import ActivitesPage from './pages/Activites/Activities';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={AboutPage} />
          <Route path="/projects" component={ProjectsPage} />
          <Route path="/activities" component={ActivitesPage} />
          <Route component={AboutPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
