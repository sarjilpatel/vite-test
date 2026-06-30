import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
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
    path: "/products",
    element: (
      <PageWrapper>
        <Products />
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
  return <RouterProvider router={router} />;
}

export default App;
