import React from 'react';
import Header from './components/Header'
import MainPageContent from './components/MainPageContent'
import Footer from './components/Footer'
import MainMenu from './components/Menu';

function App() {
  return (
    <div className="App">
      <MainMenu/>
      <Header/>
      <MainPageContent/>
      <Footer/>
    </div>
  );
}

export default App;
