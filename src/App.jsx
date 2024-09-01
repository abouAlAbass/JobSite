import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import JobListing from './components/JobListing'
import ViewAllJobs from './components/ViewAllJobs'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import JobPage from './pages/JobPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>} >
          <Route index element={<HomePage/>} />
          <Route path='/jobs' element={<JobPage/>} />
    </Route>
  
    

  )
)
const App = () => {return     <RouterProvider router={router}/> }

export default App