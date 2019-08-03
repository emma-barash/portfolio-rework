import React from 'react';
import Zoom from 'react-reveal/Zoom';
import { Link } from 'react-router-dom';
import { 
    NavBar 
} from '../elements/index.js';

const Nav = () => {
    return (
        <NavBar>
            <Zoom>
                <Link to="/about"    className="link"><h3>About Me</h3></Link>
                <Link to="/projects" className="link"><h3>Projects</h3></Link>
                <Link to="/contact"  className="link"><h3>Contact </h3></Link>
                <Link to="/"         className="link"><h3>Home    </h3></Link>
            </Zoom>
        </NavBar>
    );
};

export default Nav;