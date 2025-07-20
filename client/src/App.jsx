import React from 'react'
import { Router, RouterProvider } from 'react-router-dom'
import router from './Router/router'
const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App