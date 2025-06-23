// React stuff
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Toast
import { Toaster } from 'react-hot-toast';

// Pages
import Home from "./react/home";
import Domains from './react/domains';
import Reactive from './react/reactive';
import Nested from './react/nested';
import ChatApp from './react/chat-app';

// Components
import Footer from './react/components/footer';

// Styling
import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Home />
      </>
    )
  },
  {
    path: "api",
    element: (
      <>
        <Domains />
      </>
    )
  },
  {
    path: "reactive",
    element: (
      <>
        <Reactive />
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
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />

      <Footer />

      <Toaster />
    </>
  );
};

export default App;