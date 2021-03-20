import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(({ palette, breakpoints, typography }) => ({
  product: {
    position:'relative',
    height:350,
    width:250,
    '&:hover': {
      '& $closeBtn':{
        display:'block',
      }
    }
  },
  contentWrapper:{
    marginTop:10,
    padding:'5px 11px',
  },
  buttonWrapper:{
    marginTop:10,
    paddingTop:0,
  },
  closeBtn:{
    padding:0,
    display:'none',
    position:'absolute',
    top:0,
    right:0,
    fontSize:30,
    width:10,
    backgroundColor:'rgba(0,0,0,0.2)',
    '&:hover': {
    backgroundColor:'rgba(0,0,0,0.7)',
    }
  },
}));

export default useStyles;