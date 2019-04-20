import { ReactNode } from 'react';

export default interface IProject {
  image: string;
  title: string;
  description: string | ReactNode;
  link: string;
}
