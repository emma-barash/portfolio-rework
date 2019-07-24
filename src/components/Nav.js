import React from 'react';
import { Link } from 'react-router-dom';
import { 
    NavBar 
} from '../elements/index.js';

const Nav = () => {
    return (
        <NavBar>
            <Link className="link"><h3>About Me</h3></Link>
            <Link to="/projects" className="link"><h3>Projects</h3></Link>
            <Link className="link"><h3>Contact</h3></Link>
            <Link to="/" className="link"><h3>Home</h3></Link>
        </NavBar>
    );
};

export default Nav;