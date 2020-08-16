import React from 'react'
import {Container, Divider} from 'semantic-ui-react'
import Biography from './Biography'
import Biographies from '../../data/BiographiesData'
import StaffGrid from './StaffGrid'

const styleAbout = {
    minHeight: '600px',
    padding: '20px 0'
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
                    <StaffGrid/>
                </Container>
            </div>
        )
    }
}

export default About