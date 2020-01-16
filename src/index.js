import React from "react";
import ReactDOM from "react-dom";

import "assets/css/material-dashboard-react.css?v=1.8.0";

import { createStore } from 'redux';
import rootReducer from './modules';
import { Provider} from 'react-redux';
import App from 'App.js';



const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("root")
);
