import React, {Component} from 'react';
import {Grid, Card, GridRow, GridColumn, CardContent, CardHeader, CardDescription} from 'semantic-ui-react';

const style = {
    cardAbout: {
        height: "100%",
        opacity: "0.85"
    },

    otherCard: {
        opacity: "0.85"
    }
}

class FrontPageCards extends Component {
    render () {
        return (
            <div id="front-page-cards">
                <Grid 
                  columns={2}
                  centered={true}
                >
                    <GridRow>
                        <GridColumn>
                            <Card link fluid style={style.cardAbout} color='red'>
                                <CardContent>
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
                                    <CardHeader>Media</CardHeader>
                                    <CardDescription>
                                        Phasellus sed vulputate tortor. Curabitur ultricies risus eu urna ultricies sagittis. Ut pretium ex non turpis pulvinar sodales. Integer vehicula felis massa, ac tincidunt mauris hendrerit eget
                                    </CardDescription>
                                </CardContent>
                            </Card>
                            <Card link fluid color='red' style={style.otherCard}>
                                <CardContent>
                                    <CardHeader>Concerts</CardHeader>
                                    <CardDescription>
                                        Phasellus sed vulputate tortor. Curabitur ultricies risus eu urna ultricies sagittis. Ut pretium ex non turpis pulvinar sodales. Integer vehicula felis massa, ac tincidunt mauris hendrerit eget
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