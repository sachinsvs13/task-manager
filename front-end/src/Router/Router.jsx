import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import App from "../App";
import TaskEdit from "../taskEdit.jsx";

const Router = createBrowserRouter(
    [
        {
            path:"/",
            element:<App/>
        },
        {
            path:"/tasks/:id",
            element:<TaskEdit/>
        }
    ])

export default Router;