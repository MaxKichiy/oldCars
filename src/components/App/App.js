import { ThemeProvider } from '@material-ui/core';
import { Header } from 'components/Header';
import { Preloader } from 'components/Preloader';
import { ProductDetails } from 'components/ProductDetails';
import { Products } from 'components/Products';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { fetchingProducts } from 'store/products/productsActions';

import theme from 'theme';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchingProducts());
  }, [dispatch]);

  const state = useSelector(state => state.products);

  const comments = useSelector(state => state.comments);

  if (!state) {
    return <Preloader />;
  }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="container">
          <Header />
          <Switch>
            <Route
              path="/products/:id"
              render={props => <ProductDetails {...props} comments={comments} products={state} />}
            />
            <Route path="/" render={props => <Products products={state} {...props} />} />
          </Switch>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
