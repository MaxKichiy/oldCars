import { FormControl, InputLabel, MenuItem, Paper, Select, Switch } from '@material-ui/core';
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

  const [sortType, setSortType] = useState('name');

  const dispatch = useDispatch();

  const sortFucntion = (arr, type) => {
    return products.sort((a, b) => (a[type] > b[type] ? 1 : b[type] > a[type] ? -1 : 0));
  };
  sortFucntion(products, sortType);

  useEffect(() => {
    dispatch(setComments([]));
  }, []);

  const onSortHandle = event => {
    setSortType(event.target.value);
  };
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
      <FormControl className={classes.sortWrapper}>
        {' '}
        <InputLabel id="sortSelector">Sort By</InputLabel>
        <Select
          labelId="sortSelector"
          value={sortType}
          onChange={onSortHandle}
          className={classes.sortSelector}
        >
          <MenuItem style={{ backgroundColor: '#fff' }} value={'name'}>
            Name
          </MenuItem>
          <MenuItem style={{ backgroundColor: '#fff' }} value={'count'}>
            Quantity
          </MenuItem>
        </Select>
      </FormControl>

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
