import 'react-perfect-scrollbar/dist/css/styles.css';
import React from 'react';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from 'src/components/GlobalStyles';
import 'src/mixins/chartjs';
import theme from 'src/theme';
import routes from 'src/routes';
import { AzureAD } from 'react-aad-msal';
import { authProvider } from './authProvider';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const routing = useRoutes(routes);

  return (
    <AzureAD provider={authProvider} forceLogin={true}>
      <ThemeProvider theme={theme}>
        <ToastContainer autoClose={3000} hideProgressBar />
        <GlobalStyles />
        {routing}
      </ThemeProvider>
    </AzureAD>
  );
};

export default App;
