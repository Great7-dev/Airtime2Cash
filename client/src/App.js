import './App.css';
import CheckMail from './pages/Checkmail/CheckMail';
import {Routes, Route} from 'react-router-dom';
import ForgetPassword from './pages/ForgetPassword/ForgetPassword';
import ResetPassword from './pages/ResetPassword/ResetPassword';

function App() {
  return (
    <Routes>
      
      <Route path="/checkmail" element={< CheckMail/>} />
      <Route path="/forgetpassword" element={<ForgetPassword />} />
      <Route path="/change-password/:id" element={<ResetPassword/>} />
      
    </Routes>
    
  );
}

export default App;
