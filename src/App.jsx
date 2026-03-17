
// import react router dom
import { createBrowserRouter, RouterProvider } from "react-router-dom"

// 'import Layout'
import MainLayout from './layouts/MainLayout'

// import pages
import { Home, About, Contact, Project } from './Import/index';

function App() {


  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'about',     // ✅
          element: <About />
        },
        {
          path: 'contact',   // ✅
          element: <Contact />
        },
        {
          path: 'project',   // ✅
          element: <Project />
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App