import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(({ palette, breakpoints, typography }) => ({
  productsContainer:{
    width: '70%',
    margin: '0 auto',
    padding:'40px 20px',
    minHeight:'calc(100vh - 55px)',
    marginTop:55,
    display:'flex',
    flexWrap: 'wrap',
    justifyContent:'space-between',
    // alignItems:'flex-start',
    rowGap:20,
  },
  media:{
    width:'50%',
    maxHeight:'450px',
    objectFit:'fill',
  },
  
}));

export default useStyles;