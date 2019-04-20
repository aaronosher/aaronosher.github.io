import React, { Component, Fragment } from 'react';
import Container from '../../components/Container/Container';
import Project from '../../components/Project/Project';
import Link from '../../components/Link/Link';
import { container } from './Projects.module.scss';
import projects from '../../_projects';

class Projects extends Component {
  render() {
    return (
      <Container size='medium'>
        <div className={container}>
          <h1>Projects</h1>
          {projects.map(project => (<Fragment><Project project={project} key={project.title} /></Fragment>))}
          <p>The full list of my hackathon projects can be found on my <Link href="https://devpost.com/aaronosher">Devpost</Link>.</p>
        </div>
      </Container>
    );
  }
}

export default Projects;
