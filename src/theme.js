import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#55828b',
            light: '#c9e4ca',
            dark: '#3b6064',
        },
        secondary: {
            main: '#f50057',
        },
    },
});

export default theme;
