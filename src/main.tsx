import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import App from "./App.tsx";
import USAboutUs from "./USAboutsUs.tsx";
import USAContactus from "./USAContactUs.tsx";
import USAServices from "./USAServices.tsx";
import USIndustries from "./USIndustries.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
  },
  {
    path: "/about us",
    element: <USAboutUs />,
  },
  {
    path: "/contact us",
    element: <USAContactus />,
  },
  {
    path: "/services",
    element: <USAServices />,
  },
  {
    path: "/industries",
    element: <USIndustries />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

