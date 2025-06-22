import './App.css';

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./react/home"

import Footer from './react/components/footer';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Home />
        <Footer />
      </>
    )
  },
  {
    path: "domains",
    element: (
      <>
        <Footer />
      </>
    )
  },
  {
    path: "reactive",
    element: (
      <>
        <Footer />
      </>
    )
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
