import React from 'react'
import Header from './Header'
import Footer from './Footer'
import MainPageContent from './MainPageContent'

class MainPage extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <MainPageContent/>
                <Footer/>
            </div>
        )
    }
}

export default MainPage;