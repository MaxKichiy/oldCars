import { Button, Card, CardActions, CardContent, CardMedia, Paper, Typography } from '@material-ui/core'
import { CardProduct } from 'components/CardProduct'
import React from 'react'

import useStyles from './Products.styled'

const Products = () => {

  const classes = useStyles()

  return (
      <Paper elevation={3} className={classes.productsContainer}>
     <CardProduct/>
     <CardProduct/>
     <CardProduct/>
     <CardProduct/>
     <CardProduct/>
    </Paper>
    
  )
}

export default Products
