import { Button, Card, CardActions, CardContent, CardMedia, Paper, Typography } from '@material-ui/core'
import React from 'react'

import useStyles from './CardProduct.styled'

const Products = () => {

  const classes = useStyles()

  return (
      <Card className={classes.product}>
      <CardMedia
      component="img"
        className={classes.media}
        image="https://images.unsplash.com/photo-1610479415732-10db2f23cc62?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        title="Paella dish"
      />
      <CardContent className={classes.contentWrapper}>
        <Typography variant="h5">Name</Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        mollit laborum tempor ex consequat proident deserunt duis dolor id
        </Typography>
        <Typography>120</Typography>
      </CardContent>
      <CardActions className={classes.buttonWrapper}>
       <Button variant='contained' color='primary' fullWidth>Details</Button>
       <Button className={classes.closeBtn} color='secondary' fullWidth>&times;</Button>
       
      </CardActions>
      </Card>
  )
}

export default Products
