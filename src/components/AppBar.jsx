import { createTheme, ThemeProvider } from "@mui/material";
import AppBar from '@mui/material/AppBar';
const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });

export default function Footer() {
    return (
        <ThemeProvider theme={darkTheme}>
        <AppBar position="static" color="primary">
            Text
        </AppBar>
        </ThemeProvider>
    )
}