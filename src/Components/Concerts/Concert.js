import React from 'react'
import {Item, Button} from 'semantic-ui-react'

class Concert extends React.Component {
    render() {
        const props = this.props
        var button = null
        if(props.concert.hasButton){
            button = <Button inverted floated="right" color="red" size="small" href={props.concert.button.link}>{props.concert.button.title}</Button>
        }

        return(
            <Item>
                <Item.Image size="small" src={props.concert.image}/>
                <Item.Content verticalAlign="middle">
                    <Item.Header>{props.concert.title}</Item.Header>
                    <Item.Meta>{props.concert.tagline}</Item.Meta>
                    <Item.Description>{props.concert.text}</Item.Description>
                    <Item.Extra>
                        {button}
                    </Item.Extra>
                </Item.Content>
            </Item>
        )
    }
}

export default Concert