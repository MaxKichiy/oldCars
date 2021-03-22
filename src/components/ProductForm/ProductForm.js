import { Button, Card, CardActions, CardContent, CardMedia, Divider, List, ListItem, ListItemText, Paper, TextField, Typography } from '@material-ui/core'
import moment from 'moment'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addNewComment, fetchRemoveComment } from 'store/comments/commentsActions'
import useStyles from './ProductForm.styled'


const ProductForm = ({currName,currImage,descr,currSize,currCount}) => {

  const [name, setName] = useState('' || currName)
  const [imageUrl, setImageUrl] = useState('' || currImage)
  const [description, setDescription] = useState('' || descr)
  const [width, setWidth] = useState('' || currSize.width)
  const [height, setHeight] = useState('' || currSize.height)
  const [count, setCount] = useState('' || currCount)

  const dispatch = useDispatch()
  const classes = useStyles()

  



  return (
    <form>
      <TextField></TextField>
    </form>
  )
}

export default ProductForm
