import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(({ palette, breakpoints, typography }) => ({
  header: {
    width: '100%',
    backgroundColor: palette.header,
    color: palette.white,
  },
  headerContainer: {
    width: '70%',
    minHeight: 55,
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pageLogo: {
    color: palette.white,
    flexGrow: 1,
  },
  headerNav: {
    display: 'flex',
    width: 200,
    marginRight: 40,
    justifyContent: 'space-between',
  },
  navItem: {
    color: palette.white,
  },
}));

export default useStyles;
