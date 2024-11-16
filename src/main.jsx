import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "animate.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.jsx";
import BookmarksProvider from "./Providers/BookmarksProvider.jsx";
import UserProvider from "./Providers/UserProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <BookmarksProvider>
        <RouterProvider router={router}></RouterProvider>
      </BookmarksProvider>
    </UserProvider>
  </StrictMode>
);
