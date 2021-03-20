import { ThemeProvider } from '@material-ui/core';
import { Header } from 'components/Header';
import { ProductDetails } from 'components/ProductDetails';
import { Products } from 'components/Products';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import theme from 'theme';


const App = () =>  {
  return (
    <ThemeProvider  theme={theme}>
      <BrowserRouter>
    <div className="container">
      <Header/>
      <Switch>
      <Route path="/" exact render={props => <Products {...props}/>}/>
      <Route path="/products/:id" render={props => <ProductDetails {...props}/>}/>
      </Switch>
    </div>
    </BrowserRouter>
    </ThemeProvider>
  );   
}

export default App;
