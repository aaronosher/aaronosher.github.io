import React, { Fragment } from 'react';
import Link from '../components/Link/Link';
import IProject from './IProject';
import BallotAppImage from './images/BallotApp.jpg'

const description = (<Fragment>
  BallotApp was my first time exploring <Link href="https://firebase.com">Firebase</Link>, and was created to be a simple and easy waty for societies to hold elections. We built BallotApp in 24 hours at <Link href="https://twitter.com/hackcityuk">HackCity 2018</Link>, and won second place. I've continued to maintain it, but have let it's domain expire.
</Fragment>);

export const ballotapp: IProject = {
  image: BallotAppImage,
  title: "BallotApp",
  description: description,
  link: "https://devpost.com/software/ballotapp-tech",
};

export default ballotapp;