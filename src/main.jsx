// Imports
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// Pages
import EventPage from './pages/EventPage.jsx'
import HomePage from './pages/HomePage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import AboutUsPage from './pages/AboutUsPage.jsx'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        element: <HomePage />,
        path: "/",
      },
      {
        element: <EventPage />,
        path: "/voyage/:id",
      },
      {
        element: <ContactPage />,
        path: "/contact"
      },
      {
        element: <AboutUsPage />,
        path: "/about"
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
