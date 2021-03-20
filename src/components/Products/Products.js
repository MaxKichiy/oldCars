import {  Paper  } from '@material-ui/core'
import { useFetch } from 'api/useFetch'
import { CardProduct } from 'components/CardProduct'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchingProducts}  from 'store/products/productsActions'




import useStyles from './Products.styled'

const Products = () => {
const dispatch = useDispatch();
useEffect(() => {
  dispatch(fetchingProducts())
}, [dispatch])


const state = useSelector(state => state.products)

console.log("🚀 ~ file: Products.js ~ line 25 ~ Products ~ state", state)
  const classes = useStyles()

  return (
      <Paper elevation={3} className={classes.productsContainer}>
     {state && state.map(({count, name, imageUrl, description,_id}) => (<CardProduct id={_id} key={_id} count={count} name={name} imageUrl={imageUrl} description={description}/>))}
    </Paper>
    
  )
}

export default Products
