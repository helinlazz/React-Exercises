import React from "react";
import { Link } from "react-router-dom";

export default function Welcome () {

    return (
        <div>
            <p>Welcome</p>
            <Link to="/CardDetails">Choose your car</Link>
            <br />
            <Link to="/Counter">Count with me</Link>
            <br />
            <Link to="/Login">Write your name and password</Link>
        </div>
    );
}