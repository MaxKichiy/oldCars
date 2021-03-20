import { createMuiTheme } from '@material-ui/core/styles';
const white = '#FFFFFF';
const white60 = 'rgba(255,255,255, 0.6)';
const richBlack = '#080B15';
const roboto = 'Roboto, sans-serif';
const background = '#181D29';
const primary = '#E72E39';
const secondary = '#E89D59';

const theme = createMuiTheme({
  palette: {
    background: white,
    white,
    header: 
    background,
    richBlack,
    white60,
    primary: {main: primary},
    secondary: {main: secondary}
  },
  breakpoints: {
    navBreakpoint: 1100,
    tabletNavBar: 1050,
    tablet: 768,
    mobile: 600,
  },
  typography: {
    fontFamily: {
      roboto,
    },
  },
});
export default theme;