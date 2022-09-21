import { Login } from "./components/Login/Login";
import { Dashboard } from "./components/Dashboard/Dashboard";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
    return ( <
        BrowserRouter >
        <
        Routes >
        <
        Route path = "/login"
        element = { < Login / > }
        /> < /
        Routes >
        <
        Routes >
        <
        Route path = "/dashboard"
        element = { < Dashboard / > }
        /> < /
        Routes >
        <
        /BrowserRouter>
    );
}

export default App;