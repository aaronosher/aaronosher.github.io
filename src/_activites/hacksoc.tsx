import React, { Fragment } from 'react';
import Link from '../components/Link/Link';
import IActivity from './IActivity';
import HackSocLogo from './images/hacksoc.svg';

const description = (<Fragment>
  I picked up the reigns of HackSoc as president in March 2018. I'm currently on my second term as president. I'm responsible for the general activites of the society, as well as overseeing the organising of our annual hackathon, <Link href="https://hacknotts.com">HackNotts</Link>. In my time as president, I've overhauled the way the society is run and have improved my leadership skills.
</Fragment>);

export const hacksoc: IActivity = {
  title: "President of HackSoc",
  description: description,
  link: "https://hacksocnotts.co.uk",
  image: HackSocLogo,
};

export default hacksoc;