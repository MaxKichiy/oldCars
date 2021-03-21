import { Button, Card, CardActions, CardContent, CardMedia, Divider, List, ListItem, ListItemText, Paper, TextField, Typography } from '@material-ui/core'
import moment from 'moment'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addNewComment } from 'store/comments/commentsActions'
import useStyles from './Comments.styled'


const Comments = ({comments}) => {

  const [comment, setComment] = useState('')
  const dispatch = useDispatch()
  const classes = useStyles()

  const handleNewComment = (event) => {
    event.preventDefault();
    dispatch(addNewComment(comment, comments[0].productId))
    setComment('')
  }

  return (
    <Paper className={classes.commentsWrapper}>
    <List className={classes.list}>
      {comments && comments.map(comment => <ListItem key={comment.id} alignItems="flex-start">
      <ListItemText
        primary={moment(comment.date).format('MMM Do YY')}
        secondary={
          <React.Fragment>
            {comment.description}
          </React.Fragment>
        }
      />
    </ListItem>)}
    </List>

    <form onSubmit={handleNewComment} className={classes.form} autoComplete="off">
      <TextField value={comment} onChange={(e) => setComment(e.target.value)} className={classes.newComment} id="newComment" label="New Comment" variant="filled"  multiline color='primary'/>
      <Button type='submit' variant='contained' color='primary'>
        SEND
      </Button>
    </form>
    </Paper>
  )
}

export default Comments
