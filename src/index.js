import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body{
    background-color: #74EBD5;
    background-image: linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%);
  }
  body{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 450px) {
    body{
      display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    }
  }
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
