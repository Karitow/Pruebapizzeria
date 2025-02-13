import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import ProductosProvider from "./context/PizzasProvider.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductosProvider>
        <App />
      </ProductosProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
