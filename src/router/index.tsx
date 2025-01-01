import RootLayout from '@/pages/layout'
import HomePage from '@/pages'
import NotFound from '@/pages/not-found'
import {createBrowserRouter} from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      }
    ]
  },
  {
    path: "*",
    element: <NotFound />,
  }
])