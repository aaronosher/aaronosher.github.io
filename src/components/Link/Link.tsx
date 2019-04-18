import React from 'react';

const Link = (props: {children: Node | string, href: string}) => <a href={props.href} target="_blank" rel="noopener noreferrer">{props.children}</a>;

export default Link;
