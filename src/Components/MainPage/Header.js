import React, { Component } from 'react';
import {Segment, Container} from 'semantic-ui-react';
import logo from '../../img/logo.png'

const style = {
    header: {
      backgroundImage: "url(" + logo + ")",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      backgroundPosition: "center",
      minHeight: "610px",
    }
}

class Header extends Component {
    render() {
        return (
            <div id='main-page-header'>
                <Segment vertical style={style.header}>
                    <Container>
                    </Container>
                </Segment>
            </div>
        )
    }
}

export default Header;