import React, { Component } from 'react';
import {Segment, Container} from 'semantic-ui-react';
import MainMenu from './Menu';
import logo from '../img/logo.png'

const style = {
    header: {
      backgroundImage: "url(" + logo + ")",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      backgroundPosition: "center",
      minHeight: "700px",
    }
}

class Header extends Component {
    render() {
        return (
            <div id='main-page-header'>
                <Segment vertical style={style.header}>
                    <Container>
                        <MainMenu/>
                    </Container>
                </Segment>
            </div>
        )
    }
}

export default Header;