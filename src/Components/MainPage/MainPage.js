import React from 'react'
import Header from './Header'
import MainPageContent from './MainPageContent'

class MainPage extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <MainPageContent/>
            </div>
        )
    }
}

export default MainPage;