import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import TransactionsProvider from "./context/TransactionsProvider/TransactionsProvider";
import CategoryProvider from "./context/CategoryProvider/CategoryProvider";
import { Provider } from "react-redux";
import {store} from "./redux/store"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <TransactionsProvider>
          <CategoryProvider>
            <App />
          </CategoryProvider>
        </TransactionsProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
