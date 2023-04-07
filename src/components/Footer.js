import * as React from 'react';
import Box from '@mui/material/Box';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

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
                <GitHubIcon
                    className='icon'
                    href='https://github.com/averycaldwell'
                />
                <LinkedInIcon
                    href='https://linkedin.com/averycaldwell'
                    className='icon'
                />
                <TwitterIcon
                    href='https://twitter.com/averycaldwell'
                    className='icon'
                />
            </Box>
        </footer>
    );
}

export default Footer;
