import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import DatabaseProvider from "./store/Database/DatabaseProvider";
import ModalProvider from "./store/Modal/ModalProvider";
import UserProvider from "./store/User/UserProvider";
import App from "./App";
import "./index.css";

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
