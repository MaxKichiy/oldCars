import { createMuiTheme } from '@material-ui/core/styles';
const white = '#FFFFFF';
const white60 = 'rgba(255,255,255, 0.6)';
const richBlack = '#080B15';
const roboto = 'Roboto, sans-serif';
const headerColor = '#181D29';
const theme = createMuiTheme({
  palette: {
    background: white,
    white,
    header: 
    headerColor,
    richBlack,
    white60,
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