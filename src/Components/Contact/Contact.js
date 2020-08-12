import React from 'react'
import {Segment, Container, Header, Icon} from 'semantic-ui-react'
import SocialMedia from './SocialMedia'

const style = {
    minHeight: '600px',
    padding: '20px 0'
}

class Contact extends React.Component {
    render() {
        return (
            <div className="Contact" style={style}>
                <Segment vertical>
                    <Container>
                        <Header as="h2" textAlign="center" icon>
                            <Icon color="red" name="handshake outline"/>
                            <Header.Content>Contact us!</Header.Content>
                            <Header.Subheader>Got questions? Want to know more? Tell us about it on our WeChat Account!</Header.Subheader>
                        </Header>
                        <SocialMedia/>
                    </Container>
                </Segment>
            </div>
        )
    }
}

export default Contact