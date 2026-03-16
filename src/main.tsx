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
import USDataPolicy from "./USDataPolicy.tsx";
import ErrorBoundary from "./Components/errorBoundry.tsx";
import NotFound from "./UI/notFound.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
  },
  {
    path: "/about-Us",
    element: <USAboutUs />,
  },
  {
    path: "/contact-Us",
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
  {
    path: "/data-policy",
    element: <USDataPolicy />,
  },

  { path: "*", element: <NotFound /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </StrictMode>
);

