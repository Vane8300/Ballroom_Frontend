import './App.css';
import React from "react";
import Login from "./components/Login";

import Reservation from "./components/Reservations";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Profile from "./components/Profile";




function App() {

     if(sessionStorage.getItem('loginToken') == null) {
         return <Login/>
     }
  return (
    <div className={"App"}>
       <Router>
           <Navbar/>
           <Routes>
               <Route path={"/reservations"} element={<Reservation/>}/>
               <Route path={"/profile"} element={<Profile/>}/>
           </Routes>
       </Router>



    </div>
  );
}

export default App;

