import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import {ToastContainer} from 'react-toastify';
// import AuthState from './context/auth/AuthState';
import Landingpage from "./pages/Landingpage";


function App() {
  return(
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage/>}/>
        </Routes>
      </Router>
      
  );
}

export default App;