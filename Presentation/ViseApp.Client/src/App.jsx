import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Notification from "./pages/Notification/Notification";
import Contact from "./pages/Contact/Contact";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";

const LayoutWithFooter = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const LayoutWithoutFooter = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutWithFooter />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/bildirim-al",
        element: <Notification />,
      },
      {
        path: "/iletisim",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/",
    element: <LayoutWithoutFooter />,
    children: [
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
