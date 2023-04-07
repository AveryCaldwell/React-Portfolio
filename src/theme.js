import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#afece7',
            light: '#99c5b5',
            dark: '#899e8b',
        },
        secondary: {
            main: '#f50057',
        },
    },
});

export default theme;
