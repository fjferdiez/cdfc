import React, {Component} from 'react';
import {Segment, Container, Grid, Header} from 'semantic-ui-react'

const style = {
    minHeight: "100px",
    padding: "30px 0"
}

class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <Segment vertical inverted style={style}>
                    <Container>
                        <Grid columns={4} divided inverted>
                            <Grid.Row>
                                <Grid.Column>
                                    <Header inverted as='h4' content='About' textAlign='center' />
                                </Grid.Column>
                                <Grid.Column>
                                    <Header inverted as='h4' content='Media' textAlign='center' />
                                </Grid.Column>
                                <Grid.Column>
                                    <Header inverted as='h4' content='Concerts' textAlign='center' />
                                </Grid.Column>
                                <Grid.Column>
                                    <Header inverted as='h4' content='Contact Us' textAlign='center' />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        <Header inverted as='h6' content='This will be the place for ICP' textAlign='center' />
                    </Container>
                </Segment>
            </div>
        )
    }
}

export default Footer;