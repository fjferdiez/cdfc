import React, {Component} from 'react';
import {Segment, Container, Grid, Header} from 'semantic-ui-react'
import footerData from '../data/footerData'

const style = {
    minHeight: "100px",
    padding: "30px 0"
}

class Footer extends Component {
    render() {
        var gridContent = []

        for(var ii = 0;ii<footerData.items.length;ii++){
            var it = footerData.items[ii]

            gridContent.push(
                <Grid.Column>
                    <Header inverted id={it.id} as={it.type} content={it.content} textAlign={it.textAlign} />
                </Grid.Column>
            )
        }

        return (
            <div id="footer">
                <Segment vertical inverted style={style}>
                    <Container>
                        <Grid columns={4} divided inverted>
                            <Grid.Row>
                                {gridContent}
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