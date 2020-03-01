import React from 'react';
import styles from './App.module.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import BottomNav from './components/BottomNav';
import Root from './components/Root';

const store = createStore(reducer);

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
