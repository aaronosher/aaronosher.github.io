import React, { Fragment } from 'react';
import Link from "../components/Link";
import IProject from './IProject';
import SmashPassImage from './images/smashpass.png';

const description = (<Fragment>
  SmashPass is a passwordless identity provider that uses machine learning to create a model of your characteristic 'random smashing of your keyboard'. Myself along with my awesome teammates made smashpass in 24 hours at <Link href="https://hacksheffield.co/">HackSheffield 4.0</Link>, and won the Egress best security hack challenge.
</Fragment>);

export const smashpass: IProject = {
  image: SmashPassImage,
  title: "SmashPass",
  description: description,
  link: "https://devpost.com/software/smashpass",
};

export default smashpass;