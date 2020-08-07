import React, {Component} from 'react';
import {
    Grid, 
    Card, 
    GridRow, 
    GridColumn, 
    CardContent, 
    CardHeader, 
    CardDescription,
    Image} from 'semantic-ui-react';

import choir from '../../img/choir.png'
import musicNotation from '../../img/music_notation.png'
import musicConductor from '../../img/music_conductor.png'

const style = {
    cardAbout: {
        height: "100%",
        opacity: "0.85"
    },

    otherCard: {
        opacity: "0.85"
    },

    gridSegment: {
        padding: "90px 0"
    }
}

class FrontPageCards extends Component {
    render () {
        return (
            <div id="front-page-cards" style={style.gridSegment}>
                <Grid columns={2} centered doubling stackable>
                    <GridRow>
                        <GridColumn>
                            <Card link fluid style={style.cardAbout} color='red'>
                                <CardContent>
                                    <Image src={choir} wrapped ui={false} />
                                    <CardHeader>About</CardHeader>
                                    <CardDescription>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ultrices lectus. Nam tincidunt urna eget nibh congue tincidunt. Quisque id nisl vel elit vehicula sagittis. Maecenas nisl tellus, laoreet nec gravida nec, elementum et ante. Ut venenatis nibh sed mauris iaculis, sed ullamcorper orci faucibus. Nullam vestibulum felis at nibh fermentum consectetur
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </GridColumn>
                        <GridColumn>
                            <Card link fluid color='red' style={style.otherCard}>
                                <CardContent>
                                    <Image src={musicNotation} wrapped ui={false} />
                                    <CardHeader>Media</CardHeader>
                                    <CardDescription>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ultrices lectus. Nam tincidunt urna eget nibh congue tincidunt. Quisque id nisl vel elit vehicula sagittis. Maecenas nisl tellus, laoreet nec gravida nec, elementum et ante. Ut venenatis nibh sed mauris iaculis, sed ullamcorper orci faucibus. Nullam vestibulum felis at nibh fermentum consectetur
                                    </CardDescription>
                                </CardContent>
                            </Card>
                            <Card link fluid color='red' style={style.otherCard}>
                                <CardContent>
                                    <Image src={musicConductor} wrapped ui={false} />
                                    <CardHeader>Concerts</CardHeader>
                                    <CardDescription>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ultrices lectus. Nam tincidunt urna eget nibh congue tincidunt. Quisque id nisl vel elit vehicula sagittis. Maecenas nisl tellus, laoreet nec gravida nec, elementum et ante. Ut venenatis nibh sed mauris iaculis, sed ullamcorper orci faucibus. Nullam vestibulum felis at nibh fermentum consectetur
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </GridColumn>
                    </GridRow>
                </Grid>
            </div>
        )
    }
}

export default FrontPageCards;