import React from 'react'
import {Card, Button, Dimmer, Modal, Image} from 'semantic-ui-react'
import Biography from './Biography'

class StaffCard extends React.Component {
    state = {active: false, open: false}

    handleDimmerShow = () => this.setState({active: true})
    handleDimmerHide = () => this.setState({active: false})
    handleModalShow = () => this.setState({open: true})
    handleModalHide = () => this.setState({open: false})

    render () {
        const bio = this.props.bio
        const {active, open} = this.state

        const content = (
            <div>
                <Button basic inverted onClick={this.handleModalShow}>See More</Button>
            </div>
        )

        return (
            <div className="StaffCard">
                <Card fluid raised>
                    <Dimmer.Dimmable
                        as={Image}
                        dimmed={active}
                        dimmer={{active, content}}
                        onMouseEnter={this.handleDimmerShow}
                        onMouseLeave={this.handleDimmerHide}
                        wrapped
                        src={bio.image}
                    />
                    <Card.Content>
                        <Card.Header>{bio.title}</Card.Header>
                        <Card.Meta>{bio.tagline}</Card.Meta>
                    <Card.Description>{bio.teaser}</Card.Description>
                    </Card.Content>
                </Card>
                <Modal
                    closeIcon
                    open={open}
                    onClose={this.handleModalHide}
                    dimmer="blurring"
                    >
                    <Modal.Content>
                        <Biography bio={bio}/>
                    </Modal.Content>
                </Modal>
            </div>
        )
    }
}

export default StaffCard