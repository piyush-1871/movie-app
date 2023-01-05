import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import rootReducer from "./reducers/index";
import { legacy_createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const logger =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    // logger code
    if (typeof action !== "function") {
      console.log("ACTION_TYPE = ", action.type);
    }
    next(action);
  };

const store = legacy_createStore(rootReducer, applyMiddleware(logger, thunk));

export const StoreContext = createContext();
console.log("storeContext", StoreContext);

class Provider extends React.Component {
  render() {
    const {store} = this.props;
    return <StoreContext.Provider value={store}>
      {this.props.children}
    </StoreContext.Provider>;

  }
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>,
  </React.StrictMode>
);
