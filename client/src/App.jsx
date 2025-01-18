import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './layouts/MainLayout';
import PostListPage from './routes/PostListPage';
import SinglePostPage from './routes/SinglePostPage';
import Write from './routes/Write';
import LoginPage from './routes/LoginPage';
import RegisterPage from './routes/RegisterPage';
import HomePage from './routes/Homepage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children : [
        {
          path: "/",
          element: <HomePage/>,
        },
        {
          path: "posts",
          element: <PostListPage/>,
        },
        {
          path: ":slug",
          element: <SinglePostPage/>,
        },
        {
          path: "write",
          element: <Write/>,
        },
        {
          path: "login",
          element: <LoginPage/>,
        },
        {
          path: "register",
          element: <RegisterPage/>,
        },
      ]
    },
   
  ]);
  
  return (
    <>
    <RouterProvider router={router} />     
    </>
  )
}

export default App
