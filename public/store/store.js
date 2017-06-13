import reducers from "./../reducers";
import thunk from "redux-thunk";

import {
  createStore,
  applyMiddleware
} from "redux";

export const store = applyMiddleware(thunk)(createStore)(reducers, {});
