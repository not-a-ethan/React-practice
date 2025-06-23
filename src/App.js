import './App.css';

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Toaster } from 'react-hot-toast';

import Home from "./react/home"
import Domains from './react/domains';
import Reactive from './react/reactive';
import Nested from './react/nested';
import ChatApp from './react/chat-app';

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
    path: "api",
    element: (
      <>
        <Domains />

        <Footer />
      </>
    )
  },
  {
    path: "reactive",
    element: (
      <>
        <Reactive />

        <Footer />
      </>
    )
  },
  {
    path: "reactive/nested",
    element: (
      <>
        <Nested />
              </>
    )
  },
  {
    path: "chat-app",
    element: (
      <>
        <ChatApp />
      </>
    )
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Footer />
      <Toaster />
    </>
  )
}

export default App;
