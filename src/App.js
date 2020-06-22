import React from 'react';
import './App.css';
import SongsHome from "./Songs/SongsHome";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducers from "./Songs/reducers";

function App() {
  return (
    <Provider store={createStore(reducers)}>
      <SongsHome/>
    </Provider>
  );
}

export default App;
