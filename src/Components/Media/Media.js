import React from 'react'
import {Segment, Container} from 'semantic-ui-react'

const style = {
    minHeight: '600px'
}

class Media extends React.Component {
    render() {
        return (
            <div className="Contact" style={style}>
                <Segment vertical>
                    <Container>
                        <h1>This is the Media Page</h1>
                    </Container>
                </Segment>
            </div>
        )
    }
}

export default Media