import React, { Component, Fragment, ReactNode } from 'react';
import { App as AppStyles, medium } from './Container.module.scss';
import cx from 'classnames';

export interface ContainerProps {
  size?: 'small' | 'medium' | 'large';
  children: ReactNode;
}

export interface ContainerState {

}

class Container extends Component<ContainerProps, ContainerState> {
  static defaultProps = {
    size: 'small',
  };

  render() {
    const { children, size } = this.props;

    const containerClass = cx(AppStyles,
      size === 'medium' && medium,
      size === 'large' && medium
    );

    return (
      <Fragment>
        <div className={containerClass}>
          {children}
        </div>
      </Fragment>
    );
  }
}

export default Container;
