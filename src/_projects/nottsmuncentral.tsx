import React, { Fragment } from 'react';
import Link from "../components/Link";
import IProject from './IProject';
import NottsMunCentralImage from './images/NottsMUNCentral.png';

const description = (<Fragment>
  NottsMUN Central is an application portal I built for the <Link href="https://nottsmun.org">University of Nottingham United Nations Society's</Link> annual conference, NottsMUN. I built the portal in the run-up to the conference in the spring of 2018. The project is closed source per the request of the society.
</Fragment>);

export const nottsmuncentral: IProject = {
  image: NottsMunCentralImage,
  title: "NottsMUN Central",
  description: description,
  link: "https://central.nottsmun.org",
};

export default nottsmuncentral;