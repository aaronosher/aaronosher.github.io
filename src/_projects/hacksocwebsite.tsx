import React, { Fragment } from 'react';
import IProject from './IProject';
import HackSocWebsiteImage from './images/HackSocWebsite.jpg';

const description = (<Fragment>
  As a result of deciding to re-brand HackSoc after the 2018/19 committee was elected, we opted to refresh the aging website. I spent several weeks in the summer of 2018 re-desiging the website, building it in React and using continuous integration tools to automate deployment and manage changing content like events.
</Fragment>);

export const hacksocwebsite: IProject = {
  image: HackSocWebsiteImage,
  title: "HackSoc Website",
  description: description,
  link: "https://hacksocnotts.co.uk",
};

export default hacksocwebsite;