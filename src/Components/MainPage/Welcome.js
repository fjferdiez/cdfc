import React, { Component } from 'react';
import {Image, Header} from 'semantic-ui-react';
import {Parallax} from 'react-parallax'
import logo from '../../img/logo.png'
import front from '../../img/front.jpg'

const insideStyles = {
    padding: 20,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    fontSize: '6em'
  };

class Welcome extends Component {
    render() {
        return (
            <div id='main-page'>
                    <Parallax bgImage={front} strength={1000} blur={{ min: -5, max: 10 }}>
                        <div style={{ height: 660}}>
                            <Header size="huge" style={insideStyles} inverted textAlign="center">
                                <Header.Content style={{fontSize: '0.65em', fontWeight: 'bold'}}>Chengdu Philharmonic Choir</Header.Content>
                                <Header.Subheader style={{fontSize: '0.45em'}}>The voice of Chengdu</Header.Subheader>
                            </Header>
                        </div>
                    </Parallax>
                    <Parallax bgImage="https://picsum.photos/1200" strength={1000} blur={{ min: -5, max: 10 }}>
                        <div style={{ height: 660 }}>
                            <Image src={logo} style={insideStyles} size="big"></Image>
                        </div>
                    </Parallax>
            </div>
        )
    }
}

export default Welcome;