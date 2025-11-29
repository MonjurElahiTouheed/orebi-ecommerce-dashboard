import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Dashboard from './components/Dashboard/Dashboard.jsx';
import AllCategories from './components/Category/AllCategories.jsx';
import CreateCategory from './components/Category/CreateCategory.jsx';
import UpdateCategory from './components/Category/UpdateCategory.jsx';
import CreateSubCategory from './components/SubCategory/CreateSubCategory.jsx';
import AllSubCategories from './components/SubCategory/AllSubCategories.jsx';
import UpdateSubCategory from './components/SubCategory/UpdateSubCategory.jsx';
import createProduct from './components/Product/createProduct.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Dashboard,
    children: [
      { path: "/all-categories", Component: AllCategories },
      { path: "/create-category", Component: CreateCategory },
      { path: "/update-category/:id", Component: UpdateCategory },
      { path: "/all-sub-categories", Component: AllSubCategories },
      { path: "/create-sub-category", Component: CreateSubCategory },
      { path: "/update-sub-category/:id", Component: UpdateSubCategory },
      { path: "/create-product", Component: createProduct },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
