import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';
// MUI
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Container } from '@mui/material';

//Components
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Portfolio from './components//Portfolio';
import Navigation from './components/Navigation';

function App() {
    return (
        <HashRouter basename='/'>
            <Header>
                <Navigation />
            </Header>

            <main>
                <Container maxWidth='md'>
                    <Route exact path='/about' component={About} />
                    <Route path='/portfolio' component={Portfolio} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/resume' component={Resume} />
                </Container>
            </main>
            <Footer />
        </HashRouter>
    );
}

export default App;
