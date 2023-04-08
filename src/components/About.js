import * as React from 'react';
// import myGif from '../img/computer-bg.gif';
import * as Material from '@mui/material';

function About({ currentPage }) {
    return (
        <React.Fragment>
            {currentPage === 'About' && (
                <div>
                    {/* everything goes inside this div */}
                    <div
                        style={{
                            // backgroundSize: 'cover',
                            // backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            // backgroundImage: `url(${myGif})`,
                            height: 'calc(100vh - 114px)',
                            backgroundColor: '#c9e4ca',
                        }}
                    >
                        {/* <img src={myGif} alt='my-gif' /> */}
                        {/* FIX ME : correct the lin */}
                        <Material.Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-evenly',
                                alignItems: 'center',
                                '& > *': {
                                    mx: 'auto',
                                    // width: '75%',
                                    p: 1,
                                    m: 1,
                                    bgcolor: (theme) =>
                                        theme.palette.mode === 'dark'
                                            ? '#101010'
                                            : 'grey.50',
                                    color: (theme) =>
                                        theme.palette.mode === 'dark'
                                            ? 'grey.300'
                                            : 'grey.800',
                                    border: '1px solid',
                                    borderColor: (theme) =>
                                        theme.palette.mode === 'dark'
                                            ? 'grey.800'
                                            : 'grey.300',
                                    borderRadius: 2,
                                    textAlign: 'center',
                                    fontSize: '0.875rem',
                                    fontWeight: '700',
                                },
                            }}
                        >
                            <p>Hi! I'm Avery. Welcome to my Portfolio! </p>
                            <Material.Stack direction='row' spacing={2}>
                                <Material.Avatar
                                    alt='Avery Caldwell'
                                    src='/img/aves2.png'
                                />
                            </Material.Stack>
                            <p>Explore to learn more! Plz Hire Me</p>
                            {/* <Material.Button variant='contained'>
                                Contained
                            </Material.Button> */}
                        </Material.Box>
                        {/* background div */}
                    </div>
                </div>
            )}
        </React.Fragment>
    );
}

// <Box sx={{ maxWidth: 'md' }}>…

export default About;
