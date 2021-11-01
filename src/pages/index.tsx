import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Container from "../components/Container";
import Link from "../components/Link";
import Greeting from "../components/Greeting";
import {
  container,
  portraitContainer,
  portrait,
  bio,
  brandButtons,
} from "../assets/scss/pages/About.module.scss";
import { graphql } from "gatsby";
import Img, { FluidObject } from "gatsby-image";
import SEO from "../components/SEO";

interface AppPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        author: string;
      };
    };
    aaron: {
      childImageSharp: {
        fluid: FluidObject;
      };
    };
  };
}

const App: React.FC<AppPageProps> = ({ data }) => {
  return (
    <Container>
      <SEO title="About" />
      <div className={container}>
        <div className={portraitContainer}>
          <Img
            fluid={data.aaron.childImageSharp.fluid}
            className={portrait}
            alt="Portrait of Aaron"
          />
        </div>
        <Greeting />
        <div className={bio}>
          Software Engineer at{" "}
          <Link href="https://mlh.io">Major League Hacking</Link>, and
          co-founder of{" "}
          <Link href="https://hackathons.org.uk">Hackathons UK</Link>.
        </div>

        <div className={brandButtons}>
          <Link href="https://linkedin.com/in/aaronosher">
            <FontAwesomeIcon
              icon={faLinkedinIn}
              color="black"
              className="icon"
              size="2x"
            />
          </Link>
          <Link href="https://twitter.com/aaronosher">
            <FontAwesomeIcon
              icon={faTwitter}
              color="black"
              className="icon"
              size="2x"
            />
          </Link>
          <Link href="https://github.com/aaronosher">
            <FontAwesomeIcon
              icon={faGithub}
              color="black"
              className="icon"
              size="2x"
            />
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default App;

export const AppPageQuery = graphql`
  query AppPageQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
    aaron: file(name: { eq: "Aaron" }) {
      childImageSharp {
        fluid(maxWidth: 540) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
