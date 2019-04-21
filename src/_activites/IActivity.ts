import { ReactNode } from 'react';

export default interface IActivity {
  title: string;
  description: ReactNode;
  link?: string;
  image?: string;
}
