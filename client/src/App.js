import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UpdateProfileForm from "./pages/updateprofile/UpdateProfileForm";
import Login from "./components/Login/Login";
import CardT from "../src/pages/updateprofile/CardT";
import ProtectedRoute from "./ProtectedRoute";
import { Signup } from "./components/Signup/Signup";
import CheckMail from "./pages/Checkmail/CheckMail";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import Landingpage from "./pages/Landingpage";
import Dashboard from './components/dashbard/dashboard';
// import Mymodal  from './components/dashbard/Modal/Modal';

import TransactionHistory from "./transaction-history/TransactionHistory";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/history" element={<TransactionHistory />} />
          <Route exact path="/card" element={<CardT />} />
          <Route path="/dashboard" element={ <Dashboard/>} />
          <Route path="/" element={<Landingpage />} />
          <Route path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="/checkmail" element={<CheckMail />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/forgetpassword/:id" element={<ResetPassword />} />
          <Route
            exact
            path="/profile"
            element={
              <ProtectedRoute>
                <UpdateProfileForm />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
