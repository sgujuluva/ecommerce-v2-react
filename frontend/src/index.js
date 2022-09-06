import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//lib
import {BrowserRouter} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "react-query"
import { CartProvider } from "react-use-cart";

const client = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <CartProvider>
    <QueryClientProvider client={client}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </QueryClientProvider>
    </CartProvider>
);


