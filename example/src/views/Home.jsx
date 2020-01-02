import React from '../node/react';

//Helpers
import Digital  from '../effects/Digital';
import { Link } from '../router';

export default function Home () {
    

    //----------------------------
    // Render
    //----------------------------

    return (
        <div className="site-home">
            <Digital />
            <div className="site-title">
                <h2>npm i react-complete-router</h2>
                <Link to="start">How to use it</Link>
            </div>
        </div>
    );
}