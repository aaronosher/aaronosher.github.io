import React, { ReactNode } from 'react';

const Link = (props: {children: ReactNode , href: string}) => <a href={props.href} target="_blank" rel="noopener noreferrer">{props.children}</a>;

export default Link;
