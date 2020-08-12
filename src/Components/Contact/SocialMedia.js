import React from 'react'
import {Image, Grid, Icon, Container, Header, Divider} from 'semantic-ui-react'
import qrcode from '../../img/qrcode.jpg'

class SocialMedia extends React.Component {
    render () {
        return(
            <div className="SocialMedia">
                <Container>
                    <Image centered src={qrcode}/>
                    <Divider horizontal>Or follow us in</Divider>
                    <Grid columns={2} centered doubling stackable>
                        <Grid.Column>
                            <Header as="h4" textAlign="center" icon>
                            <Icon name="qq"/>
                            <Header.Content>QQ</Header.Content>
                            </Header>
                        </Grid.Column>
                        <Grid.Column>
                            <Header as="h4" textAlign="center" icon>
                            <Icon name="weibo"/>
                            <Header.Content>Weibo</Header.Content>
                            </Header>
                        </Grid.Column>
                    </Grid>
                </Container>
            </div>
        )
    }
}

export default SocialMedia