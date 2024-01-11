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
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import PortfolioDetails from "./pages/admin/pages/PortfolioDetails";
import Cars from "./pages/admin/pages/Cars";
const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/", element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: '/login', element: <Login /> },
      { path: '/portfolio/:id', element: <PortfolioDetails />, loader: ({ params }) => fetch(`http://localhost:5000/deal-close/v1/${params.id}`) },
      {
        path: 'admin/dashboard', element: <AdminRoute><Dashboard /></AdminRoute>,
        children: [
          { path: 'add-car', element: <AddCar /> },
          { path: 'add-portfolio', element: <AddCloseCar /> },
          { path: 'add-car', element: <AddCar /> },
          { index: true, element: <Cars /> }
        ]
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <QueryClientProvider client={queryClient}>
      <AuthProvider><RouterProvider router={router} /></AuthProvider>
    </QueryClientProvider>

  </React.StrictMode>
);