import React, { useState } from 'react';

function Header() {
    const links = [
        {name: "HOME", link: '#'},
        {name: "SERVICES", link: '#'},
        {name: "BEFORE AND AFTER", link: '#'},
        {name: "GO CAMPING", link: '#'},
        {name: "ABOUT US", link:"#"}
    ]

    const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div>
        <header>
            <h1>Carpet Advantage</h1>
            
            <div className="ph-num">
                <a href="tel:440-729-8350">
                    (440) 729-8350
                </a>
            </div>
        </header>
        <nav>
            <ul class="main-nav">
                {links.map((x, i) => (
                    <li id={i}>{x.name}</li>
                ))}
            </ul>
            
            <div className="menu-btn" onClick={(e) => {e.preventDefault(); setMenuOpen(!menuOpen)} }>
                MENU
            </div>
             
        </nav>
        <div className={`small-nav ${menuOpen === false ? "disNone": 'disBlock'}`} >
            <ul>
                {links.map((x, i) => (
                    <li id={i}>{x.name}</li>
                ))}    
            </ul>
           
        </div>   
    </div>
    
  );
}

export default Header;
