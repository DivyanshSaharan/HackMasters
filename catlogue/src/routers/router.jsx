import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import { Header } from "../containers";
import Evaluate from "../components/evaluate/Evaluate";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path:'/',
            element:<Header/>
        },
        {
            path:'/evaluate/:id',
            element:<Evaluate/>,
            loader: ({params})=>fetch(`http://localhost:3000/evaluate/${params.id}`)
        },
    ]
    },
  ]);

  export default router