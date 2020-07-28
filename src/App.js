import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';
import Routes from './routes';
import GlobalStyle from './styles/global';
import store from './store';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </>
  );
};

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default AppWrapper;
