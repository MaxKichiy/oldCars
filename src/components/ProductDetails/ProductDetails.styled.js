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
    // alignItems: 'flex-start',
    rowGap: 20,
  },
  productDescription: {
    width: '50%',
  },
  titleWrapper: {
    marginTop: 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 20,
  },
  media: {
    maxHeight: '450px',
    objectFit: 'fill',
  },
  listItem: {
    '& p': {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
      marginRight: 20,
    },
  },
  description: {
    marginTop: 20,
  },
}));

export default useStyles;
