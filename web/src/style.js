import { createTheme, responsiveFontSizes } from '@mui/material/styles';

export const theme = responsiveFontSizes(createTheme({
  palette: {
    common: {
      black: '#000000',
      white: '#ffffff'
    },
    primary: {
      light: '#A75ED4',
      main: '#953ECC',
      dark: '#7F2FB1',
      contrastText: '#F4EEF8'
    },
    secondary: {
      light: '#EED2DE',
      main: '#E6BCCD',
      dark: '#D897B3',
      contrastText: '#1C0118'
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
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121'
    },
    text: {
      primary: '#140110',
      secondary: '#1A0214',
      disabled: '#424242',
      hint: '#e0e0e0'
    },
    background: {
      paper: '#fffff',
      default: '#fafafa'
    }
  },
  typography: {
    htmlFontSize: 10,
    fontFamily: ['Poppins', 'Helvetica', 'Arial', 'sans-serif' ].join(', '),
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    h1: {
      fontSize: 28
    },
    h2: {
      fontSize: 24
    },
    h3: { 
      fontSize: 20
    },
    h4: {
      fontSize: 16
    },
    h5: {
      fontSize: 16
    },
    h6: {
      fontSize: 16
    },
    subtitle1: {},
    subtitle2: {},
    body1: {},
    body2: {},
    button: {},
    caption: {},
    overline: {}
  },
  shape: {
    borderRadius: 0
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true
      }
    }
  }
}));
