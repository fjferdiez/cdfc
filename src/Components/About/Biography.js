import React from 'react'
import {Header, Grid, Image, Segment, Transition} from 'semantic-ui-react'

const style = {
    segment: {
        padding: '30px 0 10px 0'
    },
    paragraph: {
        textAlign: 'justify'
    }
}

class Biography extends React.Component {
    state = {visible: true}

    toggleVisibility = () => this.setState((prevState) => ({visible: !prevState.visible}))

    organizeGrid(image, align, paragraphs, title) {
        var finalLayout = null

        var imageLayout = (<Grid.Column width={6}>
            <Transition animation="pulse" duration="800" visible={this.state.visible}>
                <Image src={image} size='big' circular centered onMouseOver={this.toggleVisibility}/>
            </Transition>
            </Grid.Column>)

        var paragraphLayout = (<Grid.Column width={10}>
                <Header as="h1" align={align}>{title}</Header>
                {paragraphs}
            </Grid.Column>)

        if (align === 'right'){
            finalLayout = (<Grid columns={2} stackable doubling>
                {imageLayout}
                {paragraphLayout}
            </Grid>)
        } else {
            finalLayout = (<Grid columns={2} stackable doubling>
                {paragraphLayout}
                {imageLayout}
            </Grid>)
        }

        return finalLayout
    }

    render() {
        const props = this.props

        const paragraphs = props.bio.text.map(function(it){
        return(<p key={it.id} style={style.paragraph}>{it.content}</p>)
        })

        var gridDisposition = this.organizeGrid(props.bio.image, props.bio.align, paragraphs, props.bio.title)

        return(
            <div className="Biography" style={style.segment}>
                <Segment vertical>
                    {gridDisposition}
                </Segment>
            </div>
        )
    }
}

export default Biography