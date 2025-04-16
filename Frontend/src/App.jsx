import './App.css'
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from "react-router-dom";
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import { Toaster } from "sonner";
import Resume from './components/Resume';
import News from './components/News';

const router = createBrowserRouter( 
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/dashboard' element={<Home/>} />
      <Route path='/resume' element={<Resume/>} />
      <Route path='/news' element={<News/>} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster/>
    </>
  )
}

export default App
