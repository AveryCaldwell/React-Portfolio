import * as React from 'react';
import myGif from '../img/computer-bg.gif';
import * as Material from '@mui/material';
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
                            backgroundImage: `url(${myGif})`,
                            height: 'calc(100vh - 114px)',
                        }}
                    >
                        {/* <img src={myGif} alt='my-gif' /> */}
                        {/* FIX ME : correct the lin */}
                        <Material.Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                alignItems: 'left',
                                '& > *': {
                                    m: 1,
                                },
                            }}
                        >
                            <Material.Button variant='contained'>
                                Contained
                            </Material.Button>
                        </Material.Box>
                        {/* background div */}
                    </div>
                </div>
            )}
        </React.Fragment>
    );
}

// <Box sx={{ maxWidth: 'md' }}>…

export default Home;
