import { AppBar, Button, Typography } from '@material-ui/core';
import { Popup } from 'components/Popup';
import { ProductForm } from 'components/ProductForm';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import useStyles from './Header.styled';

const Header = () => {
  const classes = useStyles();
  const [isPopupActive, setIsPopupActive] = useState(false);

  return (
    <AppBar className={classes.header}>
      <div className={classes.headerContainer}>
        <Link to="/" className={classes.pageLogo}>
          <Typography variant="h4">OCars</Typography>
        </Link>
        <ul className={classes.headerNav}>
          <li className={classes.navItem}>Product</li>
          <li className={classes.navItem}>Contacts</li>
        </ul>
        <Button variant="contained" color="primary" onClick={() => setIsPopupActive(prev => !prev)}>
          Add new
        </Button>
        <ProductForm
          onClose={() => setIsPopupActive(prev => !prev)}
          isPopupActive={isPopupActive}
          buttonTitle="Add"
        />
      </div>
    </AppBar>
  );
};

export default Header;
