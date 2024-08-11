import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Home from "./routes/Home";
import ErrorElement from "./routes/ErrorElement";
import About from "./routes/About";
import Contacts from "./routes/Contacts";

const router = createBrowserRouter([
  
  {
    path: '',
    element: <App/>,
    errorElement: <ErrorElement/>,
    children: [
      {
        index: 1,
        element: <Home/>
      },
      {
        path: "about",
        element: <About/>,
      },
      {
        path: "contacts",
        element: <Contacts/>,
      }
    ]
  },
  
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);