import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(({ palette, breakpoints, typography }) => ({
  productsContainer: {
    width: '70%',
    margin: '0 auto',
    padding: '40px 20px',
    minHeight: 'calc(100vh - 55px)',
    marginTop: 55,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    rowGap: 20,
  },
  sortSelector: {
    position: 'absolute',
    top: 75,
    zIndex: 1,
  },
}));

export default useStyles;
