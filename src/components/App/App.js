import { ThemeProvider } from '@material-ui/core';
import { Header } from 'components/Header';

import theme from 'theme';


const App = () =>  {
  return (
    <ThemeProvider  theme={theme}>
    <div className="container">
      <Header/>
    </div>
    </ThemeProvider>
  );   
}

export default App;
