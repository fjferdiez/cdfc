import React, {Component} from 'react';
import {Menu, Container} from 'semantic-ui-react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import menuData from '../data/menuData'

class MainMenu extends Component {
    state = {activeItem: 'welcome'}

    handleItemClick = (e, { name }) => this.setState({activeItem: name})

    render () {
        const { activeItem } = this.state

        var menu = []

        var routes = []

        for (var ii=0; ii < menuData.items.length; ii++){
            var it = menuData.items[ii]

            menu.push(
                <Menu.Item name={it.name}
                    key={it.id}
                    as={Link} to={it.path}
                    active={activeItem === it.name}
                    header={it.isHeader}
                    onClick={this.handleItemClick}
                    position={it.position==='right' ? 'right' : 'left'}
            />)

            routes.push(
                <Route key={it.id} path={it.path}>
                </Route>
            )
        }

        return(
            <div id="main-menu" style={{padding: "20px 0"}}>
                <Container>
                    <Router>
                        <Menu pointing secondary stackable 
                            size='massive'>
                            {menu}
                        </Menu>
                        <Switch>
                            {routes}
                        </Switch>
                    </Router>
                </Container>
            </div>
        )
    }
}

export default MainMenu;