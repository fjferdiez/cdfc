import React from 'react'
import {Segment, Container} from 'semantic-ui-react'

const style = {
    minHeight: '600px'
}

class Contact extends React.Component {
    render() {
        return (
            <div className="Contact" style={style}>
                <Segment vertical>
                    <Container>
                        <h1>This is the contact page</h1>
                    </Container>
                </Segment>
            </div>
        )
    }
}

export default Contact