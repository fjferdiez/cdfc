import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react';

class MainMenu extends Component {
    state = {activeItem: 'Welcome'}

    handleItemClick = (e, { name }) => this.setState({activeItem: name})

    render () {
        const { activeItem } = this.state
        const { fixed } = this.state

        return(
            <Menu pointing secondary stackable 
                size='massive'
                fixed={fixed ? 'top' : null}>
                <Menu.Item name='Welcome'
                    active={activeItem === 'Welcome'}
                    header
                    onClick={this.handleItemClick}
                />
                <Menu.Item name='aboutUs'
                    active={activeItem === 'aboutUs'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item name='media'
                    active={activeItem === 'media'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item name='concerts'
                    active={activeItem === 'concerts'}
                    onClick={this.handleItemClick} 
                />
                <Menu.Item name='contactUs'
                    position='right'
                    active={activeItem === 'contactUs'}
                    onClick={this.handleItemClick}
                />
            </Menu>
        )
    }
}

export default MainMenu;