import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
    return ( < BrowserRouter >

        <
        Routes >
        <
        Route exact path = "/login"
        element = { < Login / > }
        />  <
        Route exact path = "/dashboard"
        element = { < Dashboard / > }
        />  < /
        Routes > < /BrowserRouter >
    );
}
export default App;