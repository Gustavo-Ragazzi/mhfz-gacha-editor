import { ThemeProvider, createTheme } from '@mui/material'
import AppRouter from '../../routes/routes'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#7289DA',
    },
    secondary: {
      main: '#99AAB5',
    },
    background: {
      default: '#36393E',
      paper: '#2F3136',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#99AAB5',
    },
  },
  typography: {
    fontFamily: "'Helvetica Neue', sans-serif",
    h1: {
      fontSize: '1.5rem',
    },
    h2: {
      fontSize: '1.2rem',
    },
    body1: {
      fontSize: '1rem',
    },
  },
  shape: {
    borderRadius: 8,
  },
});

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter /> 
    </ThemeProvider>
  )
}

export default App
