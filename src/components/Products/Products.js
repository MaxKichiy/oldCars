import {  Paper  } from '@material-ui/core'
import { useFetch } from 'api/useFetch'
import { CardProduct } from 'components/CardProduct'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchingProducts}  from 'store/products/productsActions'




import useStyles from './Products.styled'

const Products = () => {

const { data, isLoading } = useFetch('/oldCars');

const dispatch = useDispatch();
const state = useSelector(state => state.products)
console.log("🚀 ~ file: Products.js ~ line 8 ~ state", state)
useEffect(() => {
  dispatch(fetchingProducts())
}, [])

  const classes = useStyles()

  return (
      <Paper elevation={3} className={classes.productsContainer}>
     {data && data.map(({count, name, imageUrl, description,_id}) => (<CardProduct key={_id} count={count} name={name} imageUrl={imageUrl} description={description}/>))}
    </Paper>
    
  )
}

export default Products
