import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Post from "./routes/Post";
import Home from "./routes/Home";
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
    children:[
      {
        path: "/",
    
        element: <Home />,
      },
      {
        path: "/post",
    
        element: <Post />,
      },
    ]
	},
	
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
