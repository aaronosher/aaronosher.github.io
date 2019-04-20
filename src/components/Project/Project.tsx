import React, { Component } from 'react';
import IProject from '../../_projects/IProject';
import { thumb, description, title, container } from './Project.module.scss';
import Link from '../Link/Link';

export interface ProjectProps {
  project: IProject;
  key: string | number;
}

export interface ProjectState {

}

class Project extends Component<ProjectProps, ProjectState> {
  render() {
    const { project } = this.props;
    return (
      <div className={container}>
        <h3 className={title}>{project.title}</h3>
        <Link href={project.link}>
          <img src={project.image} className={thumb} />
        </Link>
        <p className={description}>{project.description} Check it out <Link href={project.link}>here</Link>.</p>
      </div>
    );
  }
}

export default Project;
