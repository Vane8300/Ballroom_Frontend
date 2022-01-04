import React from 'react';
import '../styling/Home.css';
import {useNavigate} from "react-router-dom";
import Login from './Login';
import Logout from "./services/Logout";

export default function Home() {

    const navigate = useNavigate();

    function handleClick() {
        window.location.replace("/");
    }


    return (
        <div className={"home-page"}>
            <h1>Bine ati venit!</h1>
            <h2>Logarea cu adresa de email: {sessionStorage.getItem('email')} s-a facut cu succes!</h2>
            <div className={"bttn-log"}><Logout/></div>

        </div>

    )
}