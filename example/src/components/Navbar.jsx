import React from '../node/react';
import { Link } from '../router';

export default function Navbar () {

    //----------------------------
    // Render
    //----------------------------

    return (
        <div className="sidebar p-4">
            <h4>RCR</h4>

            <div className="sidebar-links">
                <Link to="/">Home</Link>
                <Link to="/start">How to start</Link>
                <Link to="/components">Components</Link>
                <Link to="/guards">Guards</Link>
                <Link to="/contexts">Contexts</Link>
                <Link to="/extending">Extending</Link>
                <Link to="/contribution">Contribution</Link>
            </div>
        </div>
    );
}