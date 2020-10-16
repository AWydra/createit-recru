// @ts-nocheck
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';
import MainTemplate from 'templates/MainTemplate';

const Root = () => {
  return (
    <Provider store={store}>
      <Router>
        <MainTemplate />
      </Router>
    </Provider>
  );
};

export default Root;
