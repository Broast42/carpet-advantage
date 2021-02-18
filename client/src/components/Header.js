import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {links} from '../data';
import calogo from './calogo.png';
import { MenuOutlined, PhoneFilled } from '@ant-design/icons';

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
                        <PhoneFilled/>
                        (440) 729-8350
                    </a>
                </div>
            </header>
            <nav className="top-nav">
                <ul className="main-nav">
                    {links.map((x, i) => (
                        <NavLink to={x.link} activeClassName="selected-link">
                            <li key={i}>{x.name}</li>
                        </NavLink>    
                    ))}
                </ul>
                
                <div className="menu-btn" onClick={(e) => {e.preventDefault(); setMenuOpen(!menuOpen)} }>
                    <MenuOutlined style={{color: '#ebeb03'}}/>
                </div>
                
            </nav>
        
            <div className={`small-nav-1 ${menuOpen === false ? "disNone": 'disBlock small-nav-an'}`} >
                
                <ul>
                    {links.map((x, i) => (
                        <NavLink to={x.link} activeClassName="selected-link" onClick={() => setMenuOpen(!menuOpen)}>
                            <li key={i}>{x.name}</li>
                        </NavLink>
                    ))}    
                </ul> 
                
                
                
            </div>       
            
        </div>
        
    
    );
}

export default Header;
