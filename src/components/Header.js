import * as React from 'react';
import * as Material from '@mui/material';
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
    return (
        <header className='header'>
            <Material.Box sx={{ flexGrow: 1 }}>
                <Material.AppBar position='fixed'>
                    <Material.Toolbar>
                        {/* <HeaderMenu /> */}
                        <Material.Typography
                            variant='h6'
                            component='div'
                            sx={{ marginRight: 'auto', left: 0 }}
                        >
                            Avery Caldwell, Full-Stack Developer
                        </Material.Typography>
                        <Material.Button
                            color='inherit'
                            onClick={() => setCurrentPage('Home')}
                        >
                            Home
                        </Material.Button>
                        <Material.Button
                            color='inherit'
                            onClick={() => setCurrentPage('About')}
                        >
                            About Me
                        </Material.Button>
                        <Material.Button
                            color='inherit'
                            onClick={() => setCurrentPage('Portfolio')}
                        >
                            Portfolio
                        </Material.Button>
                        <Material.Button
                            color='inherit'
                            onClick={() => setCurrentPage('Contact')}
                        >
                            Contact
                        </Material.Button>
                        <Material.Button
                            color='inherit'
                            onClick={() => setCurrentPage('Resume')}
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
