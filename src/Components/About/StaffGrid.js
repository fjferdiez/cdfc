import React from 'react'
import {Grid} from 'semantic-ui-react'
import StaffCard from './StaffCard'
import Teachers from '../../data/TeachersData'

class StaffGrid extends React.Component {
    style = {
        padding: '30px 0'
    }
    render() {
        const teacherCards = Teachers.map(function(it){
            return(
                <Grid.Column key={it.id}>
                    <StaffCard bio={it}/>
                </Grid.Column>
            )
        })

        return(
            <div className="staffGrid" style={this.style}>
                <Grid columns={3} centered doubling stackable>
                    {teacherCards}
                </Grid>
            </div>
        )
    }
}

export default StaffGrid