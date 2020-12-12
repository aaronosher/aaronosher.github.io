import React from "react";
import Container from "../components/Container";
import { container as containerClass } from "../assets/scss/pages/About.module.scss";
import SEO from "../components/SEO";

const Page404 = () => {
  return (
    <Container>
      <SEO title="Page not Found" />
      <div className={containerClass}>
        <h1>
          <span role="img" aria-label="thinking emoji">
            🤔
          </span>
        </h1>
        <h2>
          Something has gone horribly wrong, or this page never existed in the
          first place.
        </h2>
        <p>
          Next time, try using the navigation bar{" "}
          <span role="img" aria-label="winking emoji">
            😉
          </span>
        </p>
      </div>
    </Container>
  );
};

export default Page404;
