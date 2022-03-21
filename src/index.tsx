import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import AuthContextProvider from "./store/auth-context";
import RouteTree from "./routes/RouteTree";
import Layout from "./layout/MainLayout/Layout";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <Layout>
        <RouteTree />
      </Layout>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
