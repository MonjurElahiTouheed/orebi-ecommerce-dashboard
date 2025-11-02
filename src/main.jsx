import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Dashboard from './components/Dashboard/Dashboard.jsx';
import CreateProduct from './components/Product/CreateProduct.jsx';
import AllProducts from './components/Product/AllProducts.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Dashboard,
    children: [
      { path: "/all-products", Component: AllProducts },
      { path: "/create-product", Component: CreateProduct },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
