import React, { useState } from 'react';
import './App.css';
// MUI
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

//Components
import Header from '../src/components/Header';
import About from '../srComponents/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';

function App() {
    // const [currentTab, handleTabChange] = useState('about');
    // This method is checking to see what the value of `currentTab` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderTab = () => {
        if (currentTab === 'About') {
            return <About />;
        }
        if (currentTab === 'Contact') {
            return <Contact />;
        }
        if (currentTab === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentTab === 'Resume') {
            return <Resume />;
        }
        return <About />;
    };
    return (
        <>
            ;
            <Header
                currentTab={currentTab}
                handleTabChange={handleTabChange}
            ></Header>
            <main>{renderTab()}</main>
            <Footer></Footer>
        </>
    );
}

export default App;
