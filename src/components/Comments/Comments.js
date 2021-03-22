import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';
import { Preloader } from 'components/Preloader';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewComment, fetchRemoveComment } from 'store/comments/commentsActions';
import useStyles from './Comments.styled';

const Comments = ({ comments, productId }) => {
  const [comment, setComment] = useState('');
  const isLoading = useSelector(state => state.common);
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleNewComment = event => {
    event.preventDefault();
    if (comment) dispatch(addNewComment(comment, productId));
    setComment('');
  };

  const handleRemoveComponent = (id, prodId) => {
    dispatch(fetchRemoveComment(id, prodId));
  };

  return (
    <Paper className={classes.commentsWrapper}>
      {!isLoading ? (
        <Preloader />
      ) : (
        <List className={classes.list}>
          {comments &&
            comments.map(comment => (
              <ListItem key={comment.id} alignItems="flex-start">
                <ListItemText
                  primary={moment(comment.date).format('MMM Do YY')}
                  secondary={<React.Fragment>{comment.description}</React.Fragment>}
                />
                <Button onClick={() => handleRemoveComponent(comment.id, comment.productId)}>
                  &times;
                </Button>
              </ListItem>
            ))}
        </List>
      )}

      <form onSubmit={handleNewComment} className={classes.form} autoComplete="off">
        <TextField
          value={comment}
          onChange={e => setComment(e.target.value)}
          className={classes.newComment}
          id="newComment"
          label="New Comment"
          variant="filled"
          multiline
          color="primary"
        />
        <Button type="submit" variant="contained" color="primary">
          SEND
        </Button>
      </form>
    </Paper>
  );
};

export default Comments;
