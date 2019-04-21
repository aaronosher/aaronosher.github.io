import React, { Component, Fragment } from 'react';
import IActivity from '../../_activites/IActivity';
import { thumb, description, title, container } from './Activity.module.scss';
import Link from '../Link/Link';

export interface ActivityProps {
  activity: IActivity;
  key: string | number;
}

export interface ActivityState {

}

class Activity extends Component<ActivityProps, ActivityState> {
  render() {
    const { activity } = this.props;
    return (
      <div className={container}>
        <h3 className={title}>{activity.title}</h3>
        {activity.image && activity.link &&
        <Link href={activity.link}>
          <img src={activity.image} className={thumb} />
        </Link>}
        {activity.image && !activity.link && <img src={activity.image} className={thumb} />}
        <p className={description}>{activity.description}</p>
      </div>
    );
  }
}

export default Activity;
