import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import DatabaseProvider from "./store/Database/DatabaseProvider";
import ModalProvider from "./store/Modal/ModalProvider";
import UserProvider from "./store/User/UserProvider";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DatabaseProvider>
        <UserProvider>
          <ModalProvider>
            <App />
          </ModalProvider>
        </UserProvider>
      </DatabaseProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
