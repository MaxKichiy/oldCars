import { Paper } from '@material-ui/core';
import { useFetch } from 'api/useFetch';
import { CardProduct } from 'components/CardProduct';
import { Popup } from 'components/Popup';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setComments } from 'store/comments/commentsActions';
import { deleteProduct, fetchingProducts } from 'store/products/productsActions';
import { deleteItem } from 'store/products/productsActions';

import useStyles from './Products.styled';

const Products = ({ products }) => {
  const classes = useStyles();
  const [isPopupActive, setIsPopupActive] = useState(false);
  const [productIdToRemove, setProductIdToRemove] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setComments([]));
  }, []);
  const handleDelete = () => {
    dispatch(deleteProduct(productIdToRemove));
    setIsPopupActive(false);
  };
  const handleRemovePopup = id => {
    console.log();
    setProductIdToRemove(id);
    setIsPopupActive(true);
  };

  return (
    <Paper elevation={3} className={classes.productsContainer}>
      {products &&
        products.map(({ count, name, imageUrl, description, _id }) => (
          <CardProduct
            id={_id}
            key={_id}
            count={count}
            name={name}
            imageUrl={imageUrl}
            description={description}
            deleteHandler={handleRemovePopup}
          />
        ))}
      <Popup
        title="Delete item"
        isOpen={isPopupActive}
        handleClose={() => setIsPopupActive(false)}
        primaryButtonTitle="Delete"
        handleSubmit={handleDelete}
      ></Popup>
    </Paper>
  );
};

export default Products;
