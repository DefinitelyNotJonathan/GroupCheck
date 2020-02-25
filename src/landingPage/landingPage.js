import React from 'react';
import { Link } from 'react-router-dom';

export default class LandingPage extends React.Component{


    render(){
        return(
            <div>
                <h2>Brief Description Here</h2>
                <div>
                    <Link to="/login">Login</Link>
                </div>
                <div>
                    <Link to="/signup">Sign Up</Link>
                </div>
            </div>

        )
    }
}