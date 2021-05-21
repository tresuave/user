import React from 'react';
import {Link} from "react-router-dom";
import mood from './mood.jpeg';


function NavBar(props) {
    const navStyle ={
        display:"grid",
    }
    return (
        // create a dope nav bar for music acquiring
        <div>
           <nav >
               {/* insert cool font awesome logos */}
               <Link to="/">
               <h2> <img src={mood} alt=""/></h2>
               </Link>
            <ul className="nav-links" style={navStyle}>
                <Link to="/anxiety">
                <li>Anxiety </li>
                </Link>
                <Link to="/pranayama">
                <li>Pranayama </li>
                </Link>
                <Link to="/energy">
                <li>Energy</li>
                </Link>
                <Link to="/rage">
                <li>Rage</li>
                </Link>
                <Link to="ethereal">
                <li>Ethereal</li> 
                </Link>
            </ul>
           </nav> 
        </div>
    );
}

export default NavBar;