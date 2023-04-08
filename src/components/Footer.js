import * as React from 'react';
import * as IconsMaterial from '@mui/icons-material';
import * as Material from '@mui/material';

// function openLink(link) {
//     window.open(link, '_blank');
// }
function Footer() {
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
                <Material.Button
                    href='https://github.com/averycaldwell'
                    target='_blank'
                    rel='noreferrer'
                    startIcon={<IconsMaterial.GitHub />}
                ></Material.Button>
                <Material.Button
                    href='https://linkedin.com/averycaldwell'
                    target='_blank'
                    rel='noreferrer'
                    startIcon={<IconsMaterial.LinkedIn />}
                ></Material.Button>
                <Material.Button
                    href='https://twitter.com/averycaldwell'
                    target='_blank'
                    rel='noreferrer'
                    startIcon={<IconsMaterial.Twitter />}
                ></Material.Button>
            </Material.Box>
        </footer>
    );
}

export default Footer;
