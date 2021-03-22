import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(({ palette, breakpoints, typography }) => ({
  wrapper: {
    width: '49%',
    position: 'relative',
  },
  commentsWrapper: {
    minHeight: '450px',
    maxHeight: '450px',
    backgroundColor: '#cecece',
    overflowY: 'auto',
  },
  form: {
    width: '100%',
    display: 'flex',
    position: 'absolute',
    bottom: 0,
  },
  newComment: {
    flexGrow: '1',
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
  },
}));

export default useStyles;
