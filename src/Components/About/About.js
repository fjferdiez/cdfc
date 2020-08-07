import React from 'react'
import {Segment, Container} from 'semantic-ui-react'

const style = {
    minHeight: '600px'
}

class About extends React.Component {
    render() {
        return (
            <div className="Contact" style={style}>
                <Segment vertical>
                    <Container>
                        <h1>This is the About Page</h1>
                    </Container>
                </Segment>
            </div>
        )
    }
}

export default About