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
import moment from 'moment';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addNewComment, fetchRemoveComment } from 'store/comments/commentsActions';
import useStyles from './ProductForm.styled';
import { v4 as uuidv4 } from 'uuid';

const ProductForm = ({
  currName,
  currImage,
  currDescription,
  currCount,
  currWidth,
  currHeight,
  currWeight,
  comments,
  _id,
}) => {
  const [name, setName] = useState('' || currName);
  const [imageUrl, setImageUrl] = useState('' || currImage);
  const [description, setDescription] = useState('' || currDescription);
  const [width, setWidth] = useState('' || currWidth);
  const [height, setHeight] = useState('' || currHeight);
  const [weight, setWeight] = useState('' || currWeight);
  const [count, setCount] = useState('' || currCount);

  const dispatch = useDispatch();
  const classes = useStyles();

  const formHandler = event => {
    event.preventDefault();

    const newProduct = {
      _id: _id || uuidv4(),
      count: count,
      description: description,
      imageUrl: imageUrl,
      name: name,
      weight: weight,
      size: {
        width,
        height,
      },
    };

    console.log(newProduct);
  };

  return (
    <form onSubmit={formHandler}>
      <TextField id="name" label="Name" value={name} onChange={e => setName(e.target.value)} />
      <TextField
        id="imageUrl"
        label="ImageUrl"
        value={imageUrl}
        onChange={e => setImageUrl(e.target.value)}
      />
      <TextField
        id="description"
        label="Description"
        multiline
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <TextField id="width" label="Width" value={width} onChange={e => setWidth(e.target.value)} />
      <TextField
        id="height"
        label="Height"
        value={height}
        onChange={e => setHeight(e.target.value)}
      />
      <TextField
        id="weight"
        label="Weight"
        value={weight}
        onChange={e => setWeight(e.target.value)}
      />
      <TextField id="count" label="Count" value={count} onChange={e => setCount(e.target.value)} />
      <Button type="submit">GO</Button>
    </form>
  );
};

export default ProductForm;
