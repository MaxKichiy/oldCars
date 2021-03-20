import { AppBar, Typography } from '@material-ui/core'
import React from 'react'

import useStyles from './Header.styled'

const Header = () => {

  const classes = useStyles()

  return (
    <AppBar className={classes.header}>
      <div className={classes.headerContainer}>
      <Typography variant='h4'>OCars</Typography>
      <ul className={classes.headerNav}>
        <li className={classes.navItem}>Product</li>
        <li className={classes.navItem}>Contacts</li>
        <li className={classes.navItem}>LogIn</li>
      </ul>
    </div>
    </AppBar>
    
  )
}

export default Header
