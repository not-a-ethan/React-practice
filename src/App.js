import './App.css';

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
        
        <Footer />
      </>
    )
  },
  {
    path: "chat-app",
    element: (
      <>
        <ChatApp />

        <Footer />
      </>
    )
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
