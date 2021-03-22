import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(({ palette, breakpoints, typography }) => ({
  form: {
    display: 'flex',
    minWidth: 400,
    flexDirection: 'column',
    '& > div': {
      marginBottom: 20,
      color: '#fff',
    },
  },
}));

export default useStyles;
