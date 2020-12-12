import React, { Fragment } from 'react';
import Link from "../components/Link";
import IProject from './IProject';
import HackSocBotImage from './images/HackSocBot.png';

const description = (<Fragment>
  One of HackSoc's changes in 2018 was moving to Discord for it's community chat platform. One advantage of the change was using bots to solve some of our smaller problems. Originally made to send sms message to committee members when offline, the HackSoc discord bots now verify memberships, handle announcments, and solved the problem of distributing job notices people have for members.
</Fragment>);

export const hacksocbot: IProject = {
  image: HackSocBotImage,
  title: "HackSoc Discord Bots",
  description: description,
  link: "https://github.com/HackSocNotts/text-committee-bot",
};

export default hacksocbot;