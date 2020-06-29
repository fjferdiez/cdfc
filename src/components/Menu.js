import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react';

class MainMenu extends Component {
    state = {activeItem: 'closest'}

    handleItemClick = (e, { name }) => this.setState({activeItem: name})

    render () {
        const { activeItem } = this.state

        return(
            <Menu text size='large'>
                <Menu.Item name='Welcome'
                    active={activeItem === 'Welcome'}
                    header={true}
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
            </Menu>
        )
    }
}

export default MainMenu;