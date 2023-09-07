import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Post from "./routes/Post";
import Home from "./routes/Home";
import Search from './routes/Search.jsx';
import Update from './routes/Update.jsx';
import Delete from './routes/Delete.jsx';

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
      {
        path: "/search",
    
        element: <Search />,
      },
      {
        path: "/update",
    
        element: <Update />,
      },
      {
        path: "/delete",
    
        element: <Delete />,
      },
    ]
	},
	
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
