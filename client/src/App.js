import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import UpdateProfileForm from './pages/updateprofile/UpdateProfileForm';
import Login from "./components/Login/Login"
import Card from "../src/pages/updateprofile/Card"
import ProtectedRoute from "./ProtectedRoute";
import { Signup } from './components/Signup/Signup';
import CheckMail from './pages/Checkmail/CheckMail';
import ForgetPassword from './pages/ForgetPassword/ForgetPassword';
import ResetPassword from './pages/ResetPassword/ResetPassword';

function App() {
    return ( 
    <div>
     <Router>
    <Routes>
       <Route exact path='/card' element={<Card/>}/>
       <Route path="/signup" element={<Signup />} />
      <Route exact path='/login' element={ <Login/> }/>
      <Route path="/checkmail" element={< CheckMail/>} />
      <Route path="/forgetpassword" element={<ForgetPassword />} />
      <Route path="/change-password/:id" element={<ResetPassword/>} />
      <Route exact path='/profile' element={<ProtectedRoute ><UpdateProfileForm/></ProtectedRoute>}/>
    </Routes>
   </Router>
    </div>
    )

}
export default App

