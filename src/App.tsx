import { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./Navbar";
import PageWrapper from "./PageWrapper";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PageWrapper>
        <Home />
      </PageWrapper>
    ),
  },
  {
    path: "/about",
    element: (
      <PageWrapper>
        <About />
      </PageWrapper>
    ),
  },
  {
    path: "/contact",
    element: (
      <PageWrapper>
        <Contact />
      </PageWrapper>
    ),
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
