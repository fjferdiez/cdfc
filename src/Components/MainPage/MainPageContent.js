import React, { Component } from 'react';
import {Segment, Container} from 'semantic-ui-react';
import FrontPageCards from './FrontPageCards'
import front from '../../img/front.jpg'

const style = {
    cards: {
      backgroundImage: "url(" + front + ")",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "500px"
    }
}

class MainPageContent extends Component {
    render() {
        return (
            <div id='main-page-content'>
                <Segment vertical style={style.cards}>
                    <Container>
                        <FrontPageCards/>
                    </Container>
                </Segment>
            </div>
        )
    }
}

export default MainPageContent;