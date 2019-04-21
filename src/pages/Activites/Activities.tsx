import React, { Component } from 'react';
import Container from '../../components/Container/Container';
import Activity from '../../components/Activity/Activity';
import Link from '../../components/Link/Link';
import { container } from './Activites.module.scss';
import activities from '../../_activites';
import IProject from '../../_projects/IProject';

class Activites extends Component {
  render() {
    return (
      <Container size='medium'>
        <div className={container}>
          <h1>Activites</h1>
          {activities.map((activity, index) => <Activity activity={activity as IProject} key={index} />)}
        </div>
      </Container>
    );
  }
}

export default Activites;
