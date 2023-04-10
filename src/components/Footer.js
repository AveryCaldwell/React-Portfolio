import * as React from 'react';
import * as IconsMaterial from '@mui/icons-material';
import * as Material from '@mui/material';

// function openLink(link) {
//     window.open(link, '_blank');
// }
function Footer() {
    const mediaSize = Material.useMediaQuery('(min-width:500px)');
    return (
        <footer className='footer'>
            <Material.Box
                className='footer-container'
                sx={{
                    width: '100%',
                    height: 50,
                    backgroundColor: 'primary.dark',
                    bottom: 0,
                    left: 0,
                    position: 'absolute',
                }}
            >
                <div
                    style={{
                        margin: 10,
                        display: mediaSize ? 'block' : 'none',
                    }}
                >
                    <Material.Button
                        href='https://github.com/averycaldwell'
                        target='_blank'
                        rel='noreferrer'
                        startIcon={<IconsMaterial.GitHub />}
                    ></Material.Button>
                    <Material.Button
                        href='https://www.linkedin.com/in/averycaldwell/'
                        target='_blank'
                        rel='noreferrer'
                        startIcon={<IconsMaterial.LinkedIn />}
                    ></Material.Button>
                    <Material.Button
                        href='https://twitter.com/adventureraves'
                        target='_blank'
                        rel='noreferrer'
                        startIcon={<IconsMaterial.Twitter />}
                    ></Material.Button>
                </div>
            </Material.Box>
        </footer>
    );
}

export default Footer;
