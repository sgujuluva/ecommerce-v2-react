import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//lib
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { CartProvider } from "react-use-cart";
import Context from "./components/Context/Context"

const client = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <QueryClientProvider client={client}>
    <BrowserRouter>
      <CartProvider>
        <Context>
        <App />
        </Context>
      </CartProvider>
    </BrowserRouter>
  </QueryClientProvider>
);
