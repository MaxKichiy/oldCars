import { Button, Card, CardActions, CardContent, CardMedia, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

import useStyles from './CardProduct.styled'

const Products = ({count, name, imageUrl, description,id}) => {

  const classes = useStyles()

  return (
      <Card className={classes.product}>
      <CardMedia
      component="img"
        className={classes.media}
        image={imageUrl}
        title={name}
      />
      <CardContent className={classes.contentWrapper}>
        <Typography variant="h5">{name}</Typography>
        <Typography className={classes.descriptionWrapper} variant="body2" color="textSecondary" component="p">
       {description}
        </Typography>
        <Typography>Amount - {count}</Typography>
      </CardContent>
      <CardActions className={classes.buttonWrapper}>
        <Link style={{width: '100%'}} to={'products/' + id}>
       <Button variant='contained' color='primary' fullWidth>Details</Button>
       </Link>
       <Button className={classes.closeBtn} color='secondary' fullWidth>&times;</Button>
       
      </CardActions>
      </Card>
  )
}

export default Products
