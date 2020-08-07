import React, {Component} from 'react';
import {Segment, Container, Grid, Header} from 'semantic-ui-react'
import footerData from '../../data/footerData'

const style = {
    minHeight: "100px",
    padding: "30px 0"
}

class Footer extends Component {
    render() {
        var gridContent = footerData.items.map(function(it){
            return (
                <Grid.Column key={it.id}>
                    <Header inverted key={it.id} as={it.type} content={it.content} textAlign={it.textAlign} />
                </Grid.Column>
            )
        })

        return (
            <div id="footer">
                <Segment vertical inverted style={style}>
                    <Container>
                        <Grid columns={gridContent.length} divided inverted>
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