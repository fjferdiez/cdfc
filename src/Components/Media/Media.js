import React from 'react'
import {Segment, Container} from 'semantic-ui-react'
import VideoGallery from './VideoGallery'
import PhotoGallery from './PhotoGallery'

const style = {
    minHeight: '600px'
}

class Media extends React.Component {
    render() {
        return (
            <div className="Contact" style={style}>
                <Segment vertical>
                    <Container>
                        <PhotoGallery/>
                        <VideoGallery/>
                    </Container>
                </Segment>
            </div>
        )
    }
}

export default Media