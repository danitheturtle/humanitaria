import { createTheme, responsiveFontSizes } from '@mui/material/styles';

export const theme = responsiveFontSizes(createTheme({
  palette: {
    common: {
      black: '#000000',
      dark: '#212121',
      white: '#ffffff'
    },
    primary: {
      light: '#B982C4',
      main: '#8c4899',
      dark: '#723B7D',
      contrastText: '#F4EEF8'
    },
    secondary: {
      light: '#FFF2FA',
      main: '#fde8f5',
      dark: '#FFC2E8',
      contrastText: '#BC4E7D'
    },
    error: {
      light: '#F96A4D',
      main: '#F84825',
      dark: '#EC2F09',
      contrastText: '#FBFCFF'
    },
    warning: {
      light: '#EEE16D',
      main: '#EAD94C',
      dark: '#E7D636',
      contrastText: '#212121'
    },
    info: {
      light: '#0AB6FF',
      main: '#0AB6F5',
      dark: '#008FCC',
      contrastText: '#FFFFFF'
    },
    success: {
      light: '#ACD96D',
      main: '#9AD14D',
      dark: '#86C332',
      contrastText: '#212121'
    },
    grey: {
      '50': '#fafafa',
      '100': '#f5f5f5',
      '200': '#eeeeee',
      '300': '#e0e0e0',
      '400': '#bdbdbd',
      '500': '#9e9e9e',
      '600': '#757575',
      '700': '#616161',
      '800': '#424242',
      '900': '#212121'
    },
    text: {
      primary: '#140110',
      secondary: '#1A0214',
      disabled: '#424242',
      hint: '#e0e0e0'
    },
    background: {
      paper: '#fffff',
      default: '#fafafa',
      grey: '#e0e0e0'
    }
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: ['Poppins', 'Helvetica', 'Arial', 'sans-serif'].join(', '),
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    h1: {
      fontSize: 42
    },
    h2: {
      fontSize: 36
    },
    h3: {
      fontSize: 32
    },
    h4: {
      fontSize: 28
    },
    h5: {
      fontSize: 20
    },
    h6: {
      fontSize: 18,
      color: '#1A0214'
    },
    subtitle1: {
      fontSize: 18,
      color: '#1A0214',
      fontStyle: 'italic'
    },
    subtitle2: {
      fontSize: 14,
      color: '#424242',
      fontWeight: 400
    },
    body1: {
      fontSize: 16
    },
    body2: {
      fontSize: 14
    },
    button: {
      fontSize: 16
    },
    caption: {
      fontSize: 10
    },
    overline: {
      fontSize: 12
    }
  },
  shape: {
    borderRadius: 0
  },
  shadows: [
    "none", "none", "none",
    "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px", "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px", "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px",
    "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px", "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px", "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px",
    "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px", "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px", "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px",
    "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px", "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px", "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px",
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px", "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px", "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px"
  ],
  components: {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: '#fde8f5'
          },
          '&.Mui-selected:hover': {
            backgroundColor: '#fde8f5'
          }
        }
      }
    }
  }
}));
