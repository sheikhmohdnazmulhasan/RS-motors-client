import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import "./index.css";
import Root from "./Root";
import Home from "./pages/Home";
import Login from "./pages/admin/Login";
import AuthProvider from "./AuthProvider";
import Dashboard from "./pages/admin/Dashboard";
import AdminRoute from "./pages/admin/AdminRoute";
import AddCar from "./pages/admin/pages/AddCar";
import AddCloseCar from "./pages/admin/pages/AddCloseCar";

const router = createBrowserRouter([
  {
    path: "/", element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: '/login', element: <Login /> },
      {
        path: 'admin/dashboard', element: <AdminRoute><Dashboard /></AdminRoute>,
        children: [
          { path: 'add-car', element: <AddCar /> },
          { path: 'add-portfolio', element: <AddCloseCar /> }
        ]
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>
);