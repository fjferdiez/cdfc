import React from 'react'
import {Container, Divider, Card} from 'semantic-ui-react'
import Biography from './Biography'
import Biographies from '../../data/BiographiesData'
import Teachers from '../../data/TeachersData'

const styleAbout = {
    minHeight: '600px',
    padding: '20px 0'
}

const styleTeachers = {
    padding: '30px 0'
}

class About extends React.Component {
    render() {
        var bios = Biographies.map(function(it){
            return(<Biography key={it.id} bio={it}/>)
        })

        return (
            <div className="About" style={styleAbout}>
                <Container>
                    {bios}
                    <Divider horizontal>Our Conductors</Divider>
                    <div className="Teachers" style={styleTeachers}>
                        <Card.Group centered items={Teachers} itemsPerRow={3} doubling stackable/>
                    </div>
                </Container>
            </div>
        )
    }
}

export default About