import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Create from './components/Pages/Create'
import Help from './components/Pages/Help'
import AppLayout from './AppLayout/AppLayout'
import Dashboard from './components/Pages/Dashboard'
import Locate from './components/Pages/Locate'
import Handset from './components/Pages/Handset'
import Settings from './components/Pages/Settings'

const App = () => {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      children:[
        {
          path:"/",
          element:<Dashboard/>
        },
        {
          path:"/create",
          element:<Create/>
        },
        {
          path:"/help",
          element:<Help/>
        },
        {
          path:"/locate",
          element:<Locate/>
        },
        {
          path:"/handsets",
          element:<Handset/>
        },
        {
          path:"/settings",
          element:<Settings/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}>
      <AppLayout/>
    </RouterProvider>
  )
}

export default App
