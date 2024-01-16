import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import {router} from "./01 - router/index.jsx";
import UserProvider from "./05 - context/UserConnectedContext.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
  </React.StrictMode>,
)
