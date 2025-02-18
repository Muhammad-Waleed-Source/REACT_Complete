import React, { Children } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import ParamComp from "./components/ParamComp";
import Courses from "../../46 react-router/src/components/Courses";
import MockTest from "../../46 react-router/src/components/MockTest";
import Reports from "../../46 react-router/src/components/Reports";
import NotFound from "./components/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    ),
  },

  {
    path: "/about",
    element: (
      <div>
        <Navbar />
        <About />
      </div>
    ),
  },

  {
    path: "/dashboard",
    element: 
      <div>
        <Navbar />
        <Dashboard />
      </div>,
      children: [
        {
          path: 'courses',
          element: <Courses/>
        }, 
        {
          path: 'mock-tests',
          element: <MockTest/>
        },
        {
          path: 'reports',
          element: <Reports/>
        }
      ]
  },
  {
    path: "/student/:id",
    element: (
      <div>
        <Navbar />
        <ParamComp />
      </div>
    ),
  },
  {
    path: '*',
    element: <NotFound />
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
