import * as React from 'react';
import * as IconsMaterial from '@mui/icons-material';
import * as Material from '@mui/material';

function Contact({ currentPage }) {
    return (
        <React.Fragment>
            {currentPage === 'Contact' && (
                <div
                    style={{
                        backgroundColor: '#c9e4ca',
                        height: 'calc(100vh - 114px)',
                    }}
                >
                    {/* everything goes inside this div */}

                    {/* CONTACT FORM */}
                    <form inline={true} autoComplete='on'>
                        <h2
                            style={{
                                fontSize: '2rem',
                                marginTop: 'auto',
                                paddingTop: '25px',
                            }}
                        >
                            Contact Form
                        </h2>
                        <Material.Stack spacing={5} direction='column'>
                            {/* <Material.Box sx={{ '& > :not(style)': { m: 1 } }}>*/}

                            {/* ENTER NAME */}
                            <Material.Box
                                sx={{
                                    display: 'inline-block',
                                    m: 2,
                                    p: 1,
                                }}
                            >
                                <Material.FormControl variant='standard'>
                                    <Material.FormLabel
                                        sx={{
                                            fontSize: '1.25rem',
                                        }}
                                    >
                                        Enter Name
                                    </Material.FormLabel>
                                    <Material.TextField
                                        type='text'
                                        placeholder='Name'
                                        id='name'
                                        variant='standard'
                                        InputProps={{
                                            style: {
                                                width: '250px',
                                                margin: '15px',
                                                fontSize: '1rem',
                                            },
                                            startAdornment: (
                                                <Material.InputAdornment position='start'>
                                                    <IconsMaterial.AccountCircle />
                                                </Material.InputAdornment>
                                            ),
                                        }}
                                    />
                                </Material.FormControl>
                            </Material.Box>

                            {/* ENTER EMAIL */}
                            <Material.Box
                                sx={{
                                    display: 'inline-block',
                                    m: 2,
                                    p: 1,
                                }}
                            >
                                <Material.FormControl variant='standard'>
                                    <Material.FormLabel
                                        sx={{
                                            fontSize: '1.25rem',
                                        }}
                                    >
                                        Enter Email
                                    </Material.FormLabel>
                                    <Material.TextField
                                        type='email'
                                        placeholder='Email'
                                        fullWidth
                                        variant='standard'
                                        required
                                        id='email'
                                        InputProps={{
                                            style: {
                                                width: '250px',
                                                margin: '15px',
                                                fontSize: '1rem',
                                            },
                                            startAdornment: (
                                                <Material.InputAdornment position='start'>
                                                    <IconsMaterial.AccountCircle />
                                                </Material.InputAdornment>
                                            ),
                                        }}
                                    />
                                </Material.FormControl>
                            </Material.Box>

                            {/* ADD MESSAGE */}
                            <Material.Box
                                sx={{
                                    display: 'inline-block',
                                    m: 2,
                                    p: 1,
                                }}
                            >
                                <Material.FormControl variant='standard'>
                                    <Material.FormLabel
                                        sx={{
                                            fontSize: '1.25rem',
                                        }}
                                    >
                                        Add a Message
                                    </Material.FormLabel>
                                    <Material.TextField
                                        placeholder='Type a message here...'
                                        type='text'
                                        id='message'
                                        variant='outlined'
                                        multiline
                                        rows={4}
                                        InputProps={{
                                            style: {
                                                width: '500px',
                                                margin: '15px',
                                                fontSize: '1rem',
                                                borderRadius: '8px',
                                            },
                                        }}
                                    />
                                    <Material.Button
                                        sx={{
                                            margin: '15px',
                                            fontSize: '1rem',
                                            backgroundColor: '#87bba2',
                                            color: 'white',
                                            borderRadius: '16px',
                                            width: '250px',
                                            marginLeft: 'auto',
                                            marginRight: 'auto',
                                        }}
                                        variant='standard'
                                        type='submit'
                                    >
                                        Submit
                                    </Material.Button>
                                </Material.FormControl>
                            </Material.Box>
                        </Material.Stack>
                    </form>
                </div>
            )}
        </React.Fragment>
    );
}

export default Contact;
