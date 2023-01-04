import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import combineReducers from "./reducers/index";
import { legacy_createStore, applyMiddleware } from "redux";

//  function logger(obj, next, action)
// logger(obj)(next)(action)
const logger = function({ dispatch, getState }){
  return function(next){
    return function (action){
      // middleware code
      console.log('ACTION_TYPE = ', action.type);
      next(action);
    }
  }
}
const store = legacy_createStore(combineReducers, applyMiddleware(logger));
// console.log('store',store);
// console.log('beforeState',store.getState());

// store.dispatch({
//   type:'ADD_MOVIES',
//   movies:[{name: 'Superman'}]
// })
// console.log('afterState',store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);
