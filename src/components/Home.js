import * as React from 'react';
import myGif from '../img/computer-bg.gif';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function Home({ currentPage }) {
    return (
        <React.Fragment>
            {currentPage === 'Home' && (
                <div>
                    {/* everything goes inside this div */}
                    <div
                        style={{
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                        }}
                    >
                        <img src={myGif} alt='my-gif' />
                        {/* FIX ME : correct the lin */}
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                alignItems: 'left',
                                '& > *': {
                                    m: 1,
                                },
                            }}
                        >
                            <Button variant='contained' href='/About'>
                                Contained
                            </Button>
                        </Box>
                        {/* background div */}
                    </div>
                </div>
            )}
        </React.Fragment>
    );
}

// <Box sx={{ maxWidth: 'md' }}>…

export default Home;
