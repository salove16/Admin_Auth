
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { AdminPanel } from './Components/adminPanel/AdminPanel'
import Home from './Components/home/Home'
import { Login } from './Components/Login'
import { PrivateRoute } from './Components/Middleware/PrivateRoute'
import { Navbar } from './Components/navbar/Navbar'
import { SignUp } from './Components/Signup'
import { UserPage } from './Components/userPage/UserPage'


function App() {
  

  return (
    <div >
      <Navbar/>
      
     
      
      <Routes>
        <Route path='' element={<Home/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/login' element={ <Login/>}></Route>
        <Route path='/userpage' element={ <UserPage/>}></Route>
        <Route path='/admin' element={  <PrivateRoute>
         <AdminPanel/>
        </PrivateRoute>}></Route>
      </Routes>

     
    </div>
  )
}

export default App
