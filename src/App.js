import React from 'react';
import styles from './App.module.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import thunk from "redux-thunk";
import BottomNav from './components/BottomNav';
import Root from './components/Root';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

const client = axios.create({
  baseURL:'http://myphystech.herokuapp.com/123',
  responseType: 'json'
});

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));

function App() {
  return (
    <Provider store={store}>
      <div className={styles.App}>
        <Root />
        <BottomNav active={store.getState().navigation.screen} />
      </div>
    </Provider>
  );
}

export default App;
