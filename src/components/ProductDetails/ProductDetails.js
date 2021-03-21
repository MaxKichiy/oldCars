import { Button, Card, CardActions, CardContent, CardMedia, Container, List, ListItem, ListItemText, Paper, Typography } from '@material-ui/core'
import { useFetch } from 'api/useFetch'
import { Comments } from 'components/Comments'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  useParams } from 'react-router'
import { fetchingComments}  from 'store/comments/commentsActions'

import useStyles from './ProductDetails.styled'

const ProductDetails = () => {

  const params = useParams();
  const currentId = params.id

  const dispatch = useDispatch()
  const comments = useSelector(state => state.comments)
  const {commentList, isLoading} = useFetch('/oldCarsComments', `?orderBy="productId"&equalTo="${currentId}"`)
  console.log("🚀 ~ file: ProductDetails.js ~ line 16 ~ ProductDetails ~ commentList", commentList)

  useEffect(() => {
  dispatch(fetchingComments(currentId))
  }, [])


  const products = useSelector(state => state.products)
  const currentProduct = products.filter(product => product._id === currentId)[0];
  const classes = useStyles()

  return (
      <Paper className={classes.productsContainer}>
      <CardMedia
      component="img"
        className={classes.media}
        image={currentProduct.imageUrl}
        title={currentProduct.name}
      />
      <Comments comments={comments}/>
      <Paper elevation={0} className={classes.productDescription}>
      <Typography variant="h2">
         {currentProduct.name}
      </Typography>
      <Typography>
        Quantity - {currentProduct.count}
      </Typography>
      <Typography>
        Weight - {currentProduct.weight}
      </Typography>
      <Typography>
        Height - {currentProduct.size.height}
      </Typography>
      <Typography>
        Width - {currentProduct.size.width}
      </Typography>
      <Typography>
        {currentProduct.description}
      </Typography>
      </Paper>
      </Paper>
  )
}

export default ProductDetails
