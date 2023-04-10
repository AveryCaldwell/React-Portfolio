import React from 'react';
import './App.css';
// import * as Material from '@mui/material';

// MUI
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import theme from './theme';
import { ThemeProvider } from '@emotion/react';

//Components
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
// import { Container } from '@mui/material';

function App() {
    const [currentPage, setCurrentPage] = React.useState('About');
    return (
        <ThemeProvider theme={theme}>
            <div className='App'>
                <Header
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                />
                <main
                    style={{
                        position: 'absolute',

                        top: 64,
                        left: 0,
                        width: '100%',
                        height: 'calc(100vh - 114px)',
                        background:
                            'radial-gradient(circle, rgba(201,228,202,1) 0%, rgba(59,96,100,1) 100%)',
                    }}
                >
                    <div
                        style={{
                            height: 'calc(100vh - 114px)',
                            width: '100%',
                            maxWidth: 1000,
                            margin: '0 auto',
                        }}
                    >
                        <About currentPage={currentPage} />
                        <Portfolio currentPage={currentPage} />
                        <Contact currentPage={currentPage} />
                        <Resume currentPage={currentPage} />
                    </div>
                </main>
                <Footer />
            </div>
        </ThemeProvider>
    );
}

export default App;
