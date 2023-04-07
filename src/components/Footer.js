// placeholder
//import React from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';

function Footer() {
    return (
        <footer className='footer'>
            <Box
                className='footer-container'
                sx={{
                    width: '100%',
                    height: 50,
                    backgroundColor: 'primary.dark',
                    '&:hover': {
                        backgroundColor: 'primary.main',
                        opacity: [0.9, 0.8, 0.7],
                    },
                    bottom: 0,
                    left: 0,
                    position: 'absolute',
                }}
            >
                Footer
            </Box>
        </footer>
    );
}

export default Footer;
