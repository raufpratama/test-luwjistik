import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import DashboardPage from './pages/Dashboard';
import OrdersPage from './pages/Dashboard/Orders';
import AuthPage from './pages/Auth';
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const router = createBrowserRouter([
  {
    path:"/test-luwjistik",
    element: <DashboardPage/>,
    children: [
      {
        path: "/order",
        element: <OrdersPage/>
      },
    ]
  },
  {
    path: "/test-luwjistik/login",
    element: <AuthPage />
  }
])

function App() {
  return (
    <>
    <RouterProvider router={router} />
    <ToastContainer position='bottom-right' theme="colored" />
    </>
  );
}

export default App;
