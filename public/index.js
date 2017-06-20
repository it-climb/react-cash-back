import React from "react";
import ReactDOM from "react-dom";
import {withRouter} from 'react-router'
import {ConnectedRouter} from 'connected-react-router'
import { Provider } from "react-redux";
import App, { AppContainer } from "./AppContainer";
import {store} from './store/store';
import './style/style.scss';

const NonBlockApp = withRouter(App);
/**
 * @param {Object} ReactElement
 * @param {Object} DOMElement
 * @param {Function} callback
 ReactDOM.render({ReactElement}, {DOMElement}, [callback]);
 */
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <NonBlockApp />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("app")
);