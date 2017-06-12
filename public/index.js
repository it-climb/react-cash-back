import React from "react";
import ReactDOM from "react-dom";
import App, { AppContainer } from "./AppContainer";
import { Provider } from "react-redux";
import {store} from './store/store';
import './style/style.scss';

/**
 * @param {Object} ReactElement
 * @param {Object} DOMElement
 * @param {Function} callback
 ReactDOM.render({ReactElement}, {DOMElement}, [callback]);
 */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);