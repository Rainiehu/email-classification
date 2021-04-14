import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./pages/Home";
import RegisterPage from "./pages/Registration";
import ClassifyPage from "./pages/Classification";

function App() {
    return (
        <Router>
            <Route exact path='/' render={() => <Home/>}/>
            <Route exact path='/registration' render={() => <RegisterPage/>}/>
            <Route exact path='/classify' render={() => <ClassifyPage/>}/>
        </Router>
    );

}

export default App;