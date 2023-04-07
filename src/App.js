import React from 'react';
import './App.css';
// MUI
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import theme from './theme';
import { ThemeProvider } from '@emotion/react';

//Components
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
    const [currentPage, setCurrentPage] = React.useState('Home');
    return (
        <ThemeProvider theme={theme}>
            <div className='App'>
                <Header
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                />
                <main>
                    <Home currentPage={currentPage} />
                </main>
                <Footer />
            </div>
        </ThemeProvider>
    );
}

export default App;
