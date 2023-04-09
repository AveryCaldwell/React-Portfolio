import * as React from 'react';
import * as Material from '@mui/material';
import avesLogo from '../img/aves_hi.png';
// import * as IconsMaterial from '@mui/icons-material';
//  for mobile
// function HeaderMenu() {
//     const [anchorEl, setAnchorEl] = React.useState(null);
//     const open = Boolean(anchorEl);
//     const handleClick = (event) => setAnchorEl(event.currentTarget);
//     const handleClose = () => {
//         setAnchorEl(null);
//     };
//     return (
//         <React.Fragment>
//             <Material.Tooltip title='Menu'>
//                 <Material.IconButton
//                     size='large'
//                     edge='start'
//                     color='inherit'
//                     aria-label='menu'
//                     sx={{ mr: 2 }}
//                     onClick={handleClick}
//                 >
//                     <IconsMaterial.MenuIcon />
//                 </Material.IconButton>
//             </Material.Tooltip>

//             <Material.Menu
//                 anchorEl={anchorEl}
//                 id='account-menu'
//                 open={open}
//                 onClose={handleClose}
//                 onClick={handleClose}
//                 PaperProps={{
//                     elevation: 0,
//                     sx: {
//                         overflow: 'visible',
//                         filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
//                         mt: 1.5,
//                         '&:before': {
//                             content: '""',
//                             display: 'block',
//                             position: 'absolute',
//                             top: 0,
//                             left: 14,
//                             width: 10,
//                             height: 10,
//                             bgcolor: 'background.paper',
//                             transform: 'translateY(-50%) rotate(45deg)',
//                             zIndex: 0,
//                         },
//                     },
//                 }}
//                 transformOrigin={{ horizontal: 'left', vertical: 'top' }}
//                 anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
//             >
//                 {/* <Material.MenuItem onClick={handleClose}>
//                     <Avatar /> Profile
//                 </Material.MenuItem>
//                 <Material.MenuItem onClick={handleClose}>
//                     <Avatar /> My account
//                 </Material.MenuItem>
//                 <Divider /> */}
//                 <Material.MenuItem onClick={handleClose}>
//                     <Material.ListItemIcon>
//                         <IconsMaterial.PersonAdd fontSize='small' />
//                     </Material.ListItemIcon>
//                     Bitches
//                 </Material.MenuItem>
//                 <Material.MenuItem onClick={handleClose}>
//                     <Material.ListItemIcon>
//                         <IconsMaterial.Settings fontSize='small' />
//                     </Material.ListItemIcon>
//                     IconsMaterial.Settings
//                 </Material.MenuItem>
//                 <Material.MenuItem onClick={handleClose}>
//                     <Material.ListItemIcon>
//                         <IconsMaterial.Logout fontSize='small' />
//                     </Material.ListItemIcon>
//                     IconsMaterial.Logout
//                 </Material.MenuItem>
//             </Material.Menu>
//         </React.Fragment>
//     );
// }

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
    return (
        <header className='header'>
            <Material.Box sx={{ flexGrow: 1 }}>
                <Material.AppBar position='fixed'>
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
                        <Material.Typography
                            variant='h6'
                            component='div'
                            sx={{ marginRight: 'auto', left: 0 }}
                        >
                            Avery Caldwell, Full-Stack Developer
                        </Material.Typography>

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
                    </Material.Toolbar>
                </Material.AppBar>
            </Material.Box>
        </header>
    );
}

export default Header;
