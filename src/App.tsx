import React, { Component } from 'react';
import Container  from './components/Container/Container';
import Link from './components/Link/Link';
import Aaron from './resources/images/Aaron.jpg';
import './App.scss';


class App extends Component {
  render() {
    return (
      <Container>
        <div className="container">
          <img src={Aaron} className="portrait" />
          <div className="typewriter">
            <h1>Hi, I'm Aaron. 👋</h1>
          </div>
          <div className="bio">
            I study computer science at the <Link href="https://cs.nott.ac.uk">University of Nottingham</Link>, am the president of <Link href="https://hacksocnotts.co.uk">HackSoc</Link>, a <Link href="https://githubcampus.expert/aaronosher">GitHub Campus Expert</Link>, and a Coach at <Link href="https://mlh.io/eu">Major League Hacking</Link>.
          </div>
        </div>
      </Container>
    );
  }
}

export default App;
