import React from 'react';
import { NavLink } from 'react-router-dom';
import { links } from '../data'

function Footer() {
  
    return (
    <footer>
        <nav>
            <ul>
                {links.map((x, i) => (
                     <NavLink to={x.link} activeClassName="selected-link">
                        <li key={i}>{x.name}</li>
                    </NavLink>
                ))}    
            </ul>  
        </nav>

        <p className="copyright">
            Copyright {String.fromCharCode(169)} {new Date().getFullYear()} Carpet Advantage - All Rights Reserved.
        </p>
        <p className='noaa'>
            <a href="https://www.noaamembers.com/">PROUD MEMBER OF THE NOAA</a>
        </p>
    
        
    </footer>
    
  );
}

export default Footer;