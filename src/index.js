import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import GlobalStylesStyled from "./components/global-styles";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/:userName",
        element: <App/>
    }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <>
            <RouterProvider router={router}></RouterProvider>
            <GlobalStylesStyled/>

        </>
    </React.StrictMode>
);
