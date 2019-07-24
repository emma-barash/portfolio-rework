import React from 'react';
import { Link } from 'react-router-dom';
import { 
    NavBar 
} from '../elements/index.js';

const Nav = () => {
    return (
        <NavBar>
            <Link><h3>About Me</h3></Link>
            <Link to="/projects"><h3>Projects</h3></Link>
            <Link><h3>Contact</h3></Link>
        </NavBar>
    );
};

export default Nav;