import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
 import NavBar from './pages/updateprofile/Card';
import UpdateProfileForm from './pages/updateprofile/UpdateProfileForm';

function App() {
    return ( 
    <div>
     <Router>
    <Routes>
       <Route exact path='/home' element={<NavBar/>}/>
      <Route exact path='/profile' element={ <UpdateProfileForm/> }/>
      {/* <Route exact path='/registration' element={<Registration/>}/> */}
      {/* <Route exact path='/login' element={<LogIn/>}/>
      <Route exact path='/forgotPassword' element={<ForgotPassword/>}/>
      <Route exact path='/resetPassword' element={<ResetPassword/>}/>
      <Route exact path='/emailVerification' element={<EmailVerification/>}/> */}
    </Routes>
   </Router>
    </div>
    );
}

export default App;