import React, { Component, Fragment, ReactNode } from "react";
import {
  App as AppStyles,
  medium,
} from "../assets/scss/components/Container.module.scss";
import cx from "classnames";
import Navigation from "./Navigation";

export interface ContainerProps {
  size?: "small" | "medium" | "large";
  children: ReactNode;
}

export interface ContainerState {}

class Container extends Component<ContainerProps, ContainerState> {
  static defaultProps = {
    size: "small",
  };

  render() {
    const { children, size } = this.props;

    const containerClass = cx(
      AppStyles,
      size === "medium" && medium,
      size === "large" && medium
    );

    return (
      <Fragment>
        <Navigation />
        <div className={containerClass}>{children}</div>
      </Fragment>
    );
  }
}

export default Container;
