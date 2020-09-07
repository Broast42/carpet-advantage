import React from 'react';
import { links } from '../data'

function Footer() {
  
    return (
    <footer>
        <nav>
            <ul>
                {links.map((x, i) => (
                    <li id={i}>{x.name}</li>
                ))}    
            </ul>  
        </nav>

        <p className="copyright">
            Copyright {String.fromCharCode(169)} {new Date().getFullYear()} Carpet Advantage - All Rights Reserved.
        </p>
        <p className='noaa'>
            MEMBER OF NOAA
        </p>
    
        
    </footer>
    
  );
}

export default Footer;