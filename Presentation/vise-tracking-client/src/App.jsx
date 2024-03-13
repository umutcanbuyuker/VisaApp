import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home"
import Notification from "./pages/Notification/Notification"
import Contact from "./pages/Contact/Contact"
import Footer from "./components/Footer/Footer"



const Layout = () => {
  return (

    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
]);



function App() {
  return (
    <div >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
