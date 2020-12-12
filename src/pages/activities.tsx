import React, { Component } from "react";
import Container from "../components/Container";
import Activity from "../components/Activity";
import Link from "../components/Link";
import { container } from "../assets/scss/pages/Activites.module.scss";
import activities from "../_activites";
import IProject from "../_projects/IProject";

class Activities extends Component {
  render() {
    return (
      <Container size="medium">
        <div className={container}>
          <h1>Activities</h1>
          {activities.map((activity, index) => (
            <Activity activity={activity as IProject} key={index} />
          ))}
        </div>
      </Container>
    );
  }
}

export default Activities;
