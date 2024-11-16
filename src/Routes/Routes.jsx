import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home.jsx";
import Posts from "../components/Posts.jsx";
import PostDetails from "../components/PostDetails.jsx";
import Common from "../components/Common.jsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        children:[
            {
                path: '/',
                element: <Posts></Posts>,
                loader: ()=>fetch('https://jsonplaceholder.typicode.com/posts')
            },
            {
                path: '/post/:postId',
                element: <PostDetails/>,
                loader: ({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
            }
            ,
            {
                path: '/common/:page/:btn?',
                element: <Common/>
            }
        ]
    }
])