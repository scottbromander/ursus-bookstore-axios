import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import App from "./components/App/App";

const bookListReducer = (state = [], action) => {
  // TODO - set book list with data from server

  if (action.type === "SET_BOOK_LIST") {
    return [...action.payload];
  }

  return state;
};

const storeInstance = createStore(
  combineReducers({
    bookListReducer,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);
