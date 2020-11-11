import React, { useState } from 'react';
import {links} from '../data'
import calogo from './calogo.png'

function Header() {
    
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div >
            <header>
                
                <h1>
                    <a href="http://www.carpet-advantage.com">
                        <img src={calogo} alt="carpet advantage logo"/>
                        Carpet Advantage
                    </a>
                </h1>
                
                <div className="ph-num">
                    <a href="tel:440-729-8350">
                        (440) 729-8350
                    </a>
                </div>
            </header>
            <nav className="top-nav">
                <ul className="main-nav">
                    {links.map((x, i) => (
                        <li key={i}>{x.name}</li>
                    ))}
                </ul>
                
                <div className="menu-btn" onClick={(e) => {e.preventDefault(); setMenuOpen(!menuOpen)} }>
                    MENU
                </div>
                
            </nav>
        
            <div className={`small-nav-1 ${menuOpen === false ? "disNone": 'disBlock small-nav-an'}`} >
                
                <ul>
                    {links.map((x, i) => (
                        <li key={i}>{x.name}</li>
                    ))}    
                </ul> 
                
                
                
            </div>       
            
        </div>
        
    
    );
}

export default Header;
