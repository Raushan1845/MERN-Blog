import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import Signup from './pages/Signup'
import Login from './pages/Login'
import About from './pages/About'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dasboard'
import Profile from './pages/Profile'
import Sidebar from './components/Sidebar'
import Comments from './pages/Comments'
import Yourblog from './pages/Yourblog'
import CreateBlog from './pages/CreateBlog'

const router = createBrowserRouter([
  {
    path: "/",
    element: <><Navbar /><Home /></>
  },
  {
    path: "/blogs",
    element: <><Navbar /><Blogs /></>
  },
  {
    path: "/about",
    element: <><Navbar /><About /></>
  },
  {
    path: "/signup",
    element: <><Navbar /><Signup /></>
  },
  {
    path: "/login",
    element: <><Navbar /><Login /></>
  },
  {
    path: "/dashboard",
    element: <><Navbar /><Dashboard /></>,
    children: [
      {
        path: "profile",
        element: <Profile />
      },
      {
        path: "your-blog",
        element:<Yourblog/>
      },
      {
        path: "comments",
        element:<Comments/>
      },
      {
        path: "write-blog",
        element:<CreateBlog/>
      }
    ]
  }

  
  // {
  // path: "/search",
  // element: <><Navbar/><SearchList/><Footer/></>
  //},
  //{
  //  path: "/blogs/:blogId",
  //element: <><Navbar/><ProtectedRoute><BlogView /></ProtectedRoute></>
  //},
  //{
  //path: "/write-blog",
  //element: <><Navbar/><CreateBlog /></>
  //},

  // {
  // path: "/profile",
  //element: <><Navbar/><Profile /></>
  //},
  // {
  //   path: "write-blog/:blogId",
  //       element: <><Navbar/><CreateBlog /></>
  // },

  /*{
    path:"/dashboard",
    element: <><Navbar/><ProtectedRoute><Dashboard/></ProtectedRoute></>,
    children:[
      {
        path: "write-blog",
        element:<><CreateBlog/></>
      },
      {
        path: "write-blog/:blogId",
        element: <><UpdateBlog /></>
      },
      {
        path: "your-blog",
        element:<YourBlog/>
      },
      {
        path: "comments",
        element:<Comments/>
      },
      
      
      
    ]
   },*/

])

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App