import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Dashboard from './components/Dashboard/Dashboard.jsx';
import AllCategories from './components/Category/AllCategories.jsx';
import CreateCategory from './components/Category/CreateCategory.jsx';
import UpdateCategory from './components/Category/UpdateCategory.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Dashboard,
    children: [
      { path: "/all-categories", Component: AllCategories },
      { path: "/create-category", Component: CreateCategory },
      { path: "/update-category/:id", Component: UpdateCategory },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
