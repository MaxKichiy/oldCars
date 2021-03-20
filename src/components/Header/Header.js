import React from 'react'

import useStyles from './Header.styled'

const Header = () => {

  const classes = useStyles()

  return (
    <header className={classes.header}>
      <div className={classes.headerContainer}>
      <img src="Logo" alt="logo"/>
      <div className={classes.headerNav}>
        <a href="" className={classes.navItem}>Product</a>
        <a href="" className={classes.navItem}>Contacts</a>
        <a href="" className={classes.navItem}>LogIn</a>
      </div>
    </div>
    </header>
    
  )
}

export default Header
