import React from 'react';

import {
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  Button
} from '@material-ui/core';

import { useStyles } from './Popup.styled';

const Popup = ({
  title,
  isOpen,
  handleClose,
  children,
  primaryButtonTitle,
  handleSubmit,
  container,
}) => {
  const classes = useStyles();
 
   return (
    <Dialog
      className={classes.dialogFrame}
      open={isOpen}
      onClose={handleClose}
      container={container}
    >
      <DialogContent className={classes.wrapDialog}>
        <DialogTitle className={classes.dialogTitle}>{title}</DialogTitle>
        {children}
        <DialogActions className={classes.buttonBlock}>
          <Button
            className={classes.cancelButton}
            variant="contained"
            color='secondary'
            onClick={handleClose}
          >Cancel</Button>
          <Button
            className={classes.primaryButton}
            variant="contained"
            type="submit"
            onClick={handleSubmit}
          >{primaryButtonTitle}</Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};


export default Popup;
