import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from "react-router-dom";
import Dashboard from './Dashboard';

import Signup from './Signup';



export default function Signin() {

    const History = useHistory();
    const routeToSignup = () => {


        History.push('/signup');
    };

    const toDashBoard = () => {
        History.push('/dashboard');
    }


    return (
        <div>Signin


            <button onClick={routeToSignup}>
                Signup
            </button>

            <button onClick={toDashBoard}>
                Signin
            </button>

        </div>
    )
}

