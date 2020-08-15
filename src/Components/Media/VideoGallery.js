import React from 'react'
import {Grid, Embed, Header, Icon} from 'semantic-ui-react'
import videoData from '../../data/videoData'

class VideoGallery extends React.Component {

    render() {
        const videos = videoData.map(function(it){
            return(
                <Grid.Column key={it.id}>
                    <Embed icon="right circle arrow" placeholder={it.placeholder} iframe={it.iframe} source="vimeo"/>
                    <Header size="medium">{it.title}</Header>
                </Grid.Column>
            )
        })
        return(
            <div className="videoGallery">
                <Header size="medium">
                    <Icon name="film"></Icon>
                    <Header.Content>Video Gallery</Header.Content>
                    <Header.Subheader>Watch our selected performances</Header.Subheader>
                </Header>
                <Grid columns={2} doubling stackable>
                    {videos}
                </Grid>
            </div>
        )
    }
}

export default VideoGallery