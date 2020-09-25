import React from 'react'
import {Segment, Container, Header, Item} from 'semantic-ui-react'
import Concert from './Concert'
import concerts from '../../data/ConcertData'

const style = {
    minHeight: '600px'
}

class Concerts extends React.Component {
    render() {
        const concertData = concerts.map(function(it){
            return(
                <Concert key={it.id} concert={it}/>
            )
        })
        return (
            <div className="Contact" style={style}>
                <Segment vertical>
                    <Container>
                        <Header size="huge">Concerts</Header>
                        <Item.Group>
                            {concertData}
                        </Item.Group>
                    </Container>
                </Segment>
            </div>
        )
    }
}

export default Concerts