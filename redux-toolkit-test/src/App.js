import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import List from './components/List';
import Controls from './components/Controls';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Controls />
        <List />
      </div>
    </Provider>
  );
}

export default App;
