import React, {Component} from 'react';
import {Menu, Container} from 'semantic-ui-react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import menuData from '../../data/menuData'
import MainPage from '../MainPage/MainPage'
import Contact from '../Contact/Contact'
import About from '../About/About'
import Media from '../Media/Media'
import Concerts from '../Concerts/Concerts'

class MainMenu extends Component {
    state = {activeItem: 'welcome'}

    handleItemClick = (e, { name }) => this.setState({activeItem: name})

    render () {
        const { activeItem } = this.state
        const self = this

        var menu = []

        menu = menuData.items.map(function(it) {
            return (<Menu.Item name={it.name}
                    key={it.id}
                    as={Link} to={it.path}
                    active={activeItem === it.name}
                    header={it.isHeader}
                    onClick={self.handleItemClick}
                    position={it.position==='right' ? 'right' : 'left'}
            />)
        })

        return(
            <div id="main-menu" style={{paddingTop: "20px"}}>
                <Router>
                    <Container>
                        <Menu pointing secondary stackable 
                            size='massive'>
                            {menu}
                        </Menu>
                    </Container>
                        <Switch>
                            <Route path="/" exact={true} component={MainPage}/>
                            <Route path="/contact" exact={true} component={Contact} />
                            <Route path="/about" exact={true} component={About} />
                            <Route path="/media" exact={true} component={Media} />
                            <Route path="/concerts" exact={true} component={Concerts} />
                        </Switch>
                </Router>
            </div>
        )
    }
}

export default MainMenu;