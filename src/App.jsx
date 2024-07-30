import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, } from 'react-router-dom';
import MainLayout from './assets/layouts/MainLayout';
import HomePage from './assets/Pages/HomePage';
import JobsPage from './assets/Pages/JobsPage';
import NotFoundPage from './assets/Pages/NotFoundPage';

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout />}>
    <Route index element={<HomePage />} />
    <Route path='/jobs' element={<JobsPage />} />
    <Route path='*' element={<NotFoundPage/>} />
  </Route>
  )
);



function App() {
  return (
    <>
    <RouterProvider router={router} />
    
    </>
  )
  
}

export default App;