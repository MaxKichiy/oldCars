import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(({ palette }) => ({
  dialogFrame: {
    backdropFilter: 'blur(3px)',
    '& .MuiPaper-root': {
      backgroundColor:palette.header,
      borderRadius: 0,
      boxShadow: '0px 1px 2px rgba(0,0,0,0.5), 0px 1px 15px rgba(0,0,0,0.5), 0px 1px 15px rgba(0,0,0,0.5);',
    },
  },
  dialogTitle: {
    paddingLeft: '0',
    color: palette.uranianBlue,
    textAlign: 'center',
    padding: '40px !important',
  },
  wrapDialog: {
    background: palette.oxfordBlue,
    color: palette.white,
    maxWidth: 300,
    padding: 40,
    textAlign: 'center',
  },
  buttonBlock: {
    justifyContent: 'space-between',
    '& button': {
      width: '100%',
      fontWeight: 500,
      transition: 'all 0.5s ease 0s',
      border: '1px solid',
    },
  },
  cancelButton: {
    color: palette.uranianBlue,
    border: `1px solid ${palette.uranianBlue}`,
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: palette.uranianBlue,
      color: palette.onyx,
    },
  },
  primaryButton: {
    border: '1px transparent',
    color: palette.onyx,
    backgroundColor: palette.uranianBlue,
    '&:hover': {
      backgroundColor: palette.uranianBlueHover,
      color: palette.onyx,
    },
  },
}));
