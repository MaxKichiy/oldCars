import { Button, Card, CardActions, CardContent, CardMedia, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import {  useParams } from 'react-router'

import useStyles from './ProductDetails.styled'

const ProductDetails = () => {

  const params = useParams();
  const currentId = params.id

  const products = useSelector(state => state.products)
  const currentProduct = products.filter(product => product._id === currentId)[0];
  console.log("🚀 ~ file: ProductDetails.js ~ line 16 ~ ProductDetails ~ currentProduct", currentProduct)
  const classes = useStyles()

  return (
      <Paper className={classes.productsContainer}>
      <CardMedia
      component="img"
        className={classes.media}
        image={currentProduct.imageUrl}
        title={currentProduct.name}
      />
      <CardContent className={classes.contentWrapper}>
        <Typography variant="h5">{currentProduct.name}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        {currentProduct.description}
        </Typography>
        <Typography>Count - {currentProduct.count}</Typography>
      </CardContent>
      <CardActions className={classes.buttonWrapper}>
       <Button variant='contained' color='primary' fullWidth>Edit</Button>
      </CardActions>
      </Paper>
  )
}

export default ProductDetails
