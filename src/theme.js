import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#87bba2',
            light: '#c9e4ca',
            dark: '#364958',
        },
        secondary: {
            main: '#f50057',
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
        },
    },
});

export default theme;
