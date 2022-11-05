import React from "react";
import ReactDOM from "react-dom/client";
import LinkTree from "./linktree";
import ContactFormPage from "./Components/Contact/contact";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
element: <LinkTree />
  },
  {
    path: "/contact",
element: <ContactFormPage />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);