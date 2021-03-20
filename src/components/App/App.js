import { ThemeProvider } from '@material-ui/core';
import { Header } from 'components/Header';
import { Products } from 'components/Products';

import theme from 'theme';


const App = () =>  {
  return (
    <ThemeProvider  theme={theme}>
    <div className="container">
      <Header/>
      <Products/>
    </div>
    </ThemeProvider>
  );   
}

export default App;
