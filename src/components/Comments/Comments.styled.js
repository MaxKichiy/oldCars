import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(({ palette, breakpoints, typography }) => ({
  commentsWrapper:{
    width: '49%',
    maxHeight:'450px',
    backgroundColor:'#cecece',
    overflowY:'scroll',
  },
  form:{
    width: '100%',
    display:'flex',
  },
  newComment:{
    flexGrow:'1',
  }
}));

export default useStyles;