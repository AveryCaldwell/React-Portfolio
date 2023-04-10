import * as React from 'react';
import * as Material from '@mui/material';
import * as IconsMaterial from '@mui/icons-material';
import avesLogo from '../img/averypizza.png';

function HeaderMenu({ setCurrentPage }) {
    //  The menu when it is clicked
    const [anchorEl, setAnchorEl] = React.useState(null);
    //  Tracks whether the menu is open or not,
    const open = Boolean(anchorEl);
    // Updates the current page when a menu item is clicked
    const handleClick = (event) => setAnchorEl(event.currentTarget);
    //  called when the menu is closed
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <React.Fragment>
            <Material.Tooltip title='Menu'>
                {/* Menu Icon that appears at certain media size */}
                <Material.IconButton
                    size='large'
                    edge='start'
                    color='inherit'
                    aria-label='menu'
                    sx={{ mr: 2 }}
                    onClick={handleClick}
                >
                    <IconsMaterial.Menu
                        sx={{
                            color: 'white',
                        }}
                    />
                </Material.IconButton>
            </Material.Tooltip>

            <Material.Menu
                anchorEl={anchorEl}
                id='account-menu'
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'left', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
            >
                <Material.MenuItem onClick={() => setCurrentPage('About')}>
                    <Material.ListItemIcon>
                        <IconsMaterial.Person fontSize='small' />
                    </Material.ListItemIcon>
                    About Me
                </Material.MenuItem>
                <Material.MenuItem onClick={() => setCurrentPage('Portfolio')}>
                    <Material.ListItemIcon>
                        <IconsMaterial.CollectionsBookmark fontSize='small' />
                    </Material.ListItemIcon>
                    Portfolio
                </Material.MenuItem>
                <Material.MenuItem onClick={() => setCurrentPage('Contact')}>
                    <Material.ListItemIcon>
                        <IconsMaterial.ContactPage fontSize='small' />
                    </Material.ListItemIcon>
                    Contact
                </Material.MenuItem>
                <Material.MenuItem onClick={() => setCurrentPage('Resume')}>
                    <Material.ListItemIcon>
                        <IconsMaterial.DocumentScanner fontSize='small' />
                    </Material.ListItemIcon>
                    Resume
                </Material.MenuItem>
            </Material.Menu>
        </React.Fragment>
    );
}
// Function to render Header component
function Header({ setCurrentPage, currentPage }) {
    const buttonSX = {
        color: 'white',
        position: 'relative',

        '&:before': {
            content: "''",
            position: 'absolute',
            width: '0',
            height: '2px',
            bottom: '-3px',
            left: '50%',
            transform: 'translate(-50%,0%)',
            backgroundColor: 'white',
            visibility: 'hidden',
            transition: 'all 0.3s ease-in-out',
        },
        '&:hover:before': {
            visibility: 'visible',
            width: '100%',
        },
    };
    const buttonSXSelected = {
        color: 'white',
        position: 'relative',
        borderBottom: '2px solid white',
        borderRadius: 0,
        bottom: -2,
    };
    //  Media queries
    const mediaSize = Material.useMediaQuery('(min-width:900px)');
    const mediaSmall = Material.useMediaQuery('(min-width:400px)');
    return (
        <header className='header'>
            <Material.Box sx={{ flexGrow: 1, minHeight: 600 }}>
                <Material.AppBar position='fixed' sx={{ height: '64px' }}>
                    {/* Logo image */}
                    <Material.Toolbar>
                        <img
                            src={avesLogo}
                            style={{
                                height: '50px',
                                width: '50px',
                                backgroundColor: '#c9e4ca',
                                borderRadius: 300,
                                border: '2px solid #e9f4e9',
                                boxShadow: 2,
                                marginRight: 10,
                            }}
                            alt='Aves Logo'
                        />
                        {/* Logo text */}
                        <Material.Typography
                            variant='h6'
                            component='div'
                            sx={{
                                marginRight: 'auto',
                                left: 0,
                                color: 'white',
                                fontWeight: 'light',
                            }}
                        >
                            <div
                                style={{
                                    display: mediaSmall ? 'block' : 'none',
                                }}
                            >
                                <strong>Avery Caldwell</strong>, Full-Stack
                                Developer
                            </div>
                            {/* Navigation */}
                        </Material.Typography>
                        {mediaSize === true && (
                            <div>
                                <Material.Button
                                    color='inherit'
                                    onClick={() => setCurrentPage('About')}
                                    sx={
                                        currentPage === 'About'
                                            ? buttonSXSelected
                                            : buttonSX
                                    }
                                >
                                    About Me
                                </Material.Button>
                                <Material.Button
                                    color='inherit'
                                    onClick={() => setCurrentPage('Portfolio')}
                                    sx={
                                        currentPage === 'Portfolio'
                                            ? buttonSXSelected
                                            : buttonSX
                                    }
                                >
                                    Portfolio
                                </Material.Button>
                                <Material.Button
                                    color='inherit'
                                    onClick={() => setCurrentPage('Contact')}
                                    sx={
                                        currentPage === 'Contact'
                                            ? buttonSXSelected
                                            : buttonSX
                                    }
                                >
                                    Contact
                                </Material.Button>
                                <Material.Button
                                    color='inherit'
                                    onClick={() => setCurrentPage('Resume')}
                                    sx={
                                        currentPage === 'Resume'
                                            ? buttonSXSelected
                                            : buttonSX
                                    }
                                >
                                    Resume
                                </Material.Button>
                            </div>
                        )}
                        {mediaSize !== true && (
                            <HeaderMenu setCurrentPage={setCurrentPage} />
                        )}
                    </Material.Toolbar>
                </Material.AppBar>
            </Material.Box>
        </header>
    );
}

export default Header;
