import React from 'react';
import {Container, Segment} from 'semantic-ui-react'
import MainMenu from './components/Menu'
import FrontPageCards from './components/Cards'
import logo from './img/logo.png'
import front from './img/front.jpg'

const style = {
  header: {
    backgroundImage: "url(" + logo + ")",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
    minHeight: "700px",
  },

  cards: {
    backgroundImage: "url(" + front + ")",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "500px"
  }
}

function App() {
  return (
    <div className="App">
      <Segment vertical style={style.header}>
        <Container>
          <MainMenu></MainMenu>
        </Container>
      </Segment>
      <Segment vertical style={style.cards}>
        <Container>
          <br/>
          <br/>
          <br/>
          <br/>
          <FrontPageCards/>
        </Container>
      </Segment>
    </div>
  );
}

export default App;
