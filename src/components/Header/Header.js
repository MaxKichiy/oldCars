import { AppBar, Button, Typography } from '@material-ui/core'
import { Popup } from 'components/Popup'
import React, { useState } from 'react'

import useStyles from './Header.styled'

const Header = () => {

  const classes = useStyles()
  const [isPopupActive, setIsPopupActive] = useState(false)
  return (
    <AppBar className={classes.header}>
      <div className={classes.headerContainer}>
      <Typography variant='h4'>OCars</Typography>
      <ul className={classes.headerNav}>
        <li className={classes.navItem}>Product</li>
        <li className={classes.navItem}>Contacts</li>
        <li className={classes.navItem}>
          <Button variant='contained' color='primary' onClick={()=> setIsPopupActive(prev => !prev)}>Add new</Button>
        </li>
        <Popup  title='New Product'
  isOpen={isPopupActive}
  primaryButtonTitle='Add'
  />
      </ul>
    </div>
    </AppBar>
    
  )
}

export default Header
