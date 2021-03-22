import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from '@material-ui/core';
import { Comments } from 'components/Comments';
import { Popup } from 'components/Popup';
import { Preloader } from 'components/Preloader';
import { ProductForm } from 'components/ProductForm';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchingComments } from 'store/comments/commentsActions';

import useStyles from './ProductDetails.styled';

const ProductDetails = () => {
  const params = useParams();
  const currentId = params.id;
  const dispatch = useDispatch();

  const [isPopupActive, setIsPopupActive] = useState(false);

  const handleClosePopup = () => {
    setIsPopupActive(prev => !prev);
  };

  const products = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchingComments(currentId));
  }, []);

  const comments = useSelector(state => state.comments);

  const currentProduct = products.filter(product => product._id === currentId)[0];

  const classes = useStyles();

  if (!currentProduct) return <Preloader />;

  return (
    <Paper className={classes.productsContainer}>
      <Paper elevation={0} className={classes.productDescription}>
        <CardMedia
          component="img"
          className={classes.media}
          image={currentProduct.imageUrl}
          title={currentProduct.name}
        />
        <div className={classes.titleWrapper}>
          <Typography className={classes.nameField} variant="h2">
            {currentProduct.name}
          </Typography>
          <Button variant="contained" color="secondary" onClick={() => setIsPopupActive(true)}>
            Edit
          </Button>
        </div>
        <List className={classes.list}>
          <ListItem alignItems="flex-start" divider className={classes.listItem}>
            <Typography>
              Quantity <span>{currentProduct.count}</span>
            </Typography>
          </ListItem>
          <ListItem alignItems="flex-start" divider className={classes.listItem}>
            <Typography>
              Weight <span>{currentProduct.weight}</span>
            </Typography>
          </ListItem>
          <ListItem alignItems="flex-start" divider className={classes.listItem}>
            <Typography>
              Height <span>{currentProduct.size.height}</span>
            </Typography>
          </ListItem>
          <ListItem alignItems="flex-start" divider className={classes.listItem}>
            <Typography>
              Width <span>{currentProduct.size.width}</span>
            </Typography>
          </ListItem>
        </List>

        <Typography className={classes.description}>{currentProduct.description}</Typography>
      </Paper>

      <Comments comments={comments} productId={currentProduct._id} />

      <ProductForm
        currName={currentProduct.name}
        currImage={currentProduct.imageUrl}
        currDescription={currentProduct.description}
        currCount={currentProduct.count}
        currWidth={currentProduct.size.width}
        currHeight={currentProduct.size.height}
        currWeight={currentProduct.weight}
        onClose={handleClosePopup}
        isPopupActive={isPopupActive}
        _id={currentProduct._id}
        comments={currentProduct.comments}
        buttonTitle="Edit"
      />
    </Paper>
  );
};

export default ProductDetails;
