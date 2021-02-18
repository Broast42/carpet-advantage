import React from 'react';
import { NavLink } from 'react-router-dom';
import { links } from '../data';
import { FacebookFilled, LinkedinFilled, } from '@ant-design/icons';

//move to import when socal site is needed to be linked
// InstagramFilled, YoutubeFilled, TwitterSquareFilled
function Footer() {
  
    return (
    <footer>
        <div className="socal">
            {/* Facebook */}
            <a href="https://www.facebook.com/CarpetAdvantage">
                <FacebookFilled />
            </a>
            
            {/* Twitter */}
            {/* <a href="https://www.facebook.com/CarpetAdvantage">
                <TwitterSquareFilled/>
            </a> */}

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/company/carpetadvantage/">
                <LinkedinFilled/>
            </a>
             
            {/* Instagram */}
            {/* <a href="https://www.facebook.com/CarpetAdvantage">
                <InstagramFilled/>
            </a> */}

            {/* YouTube */}
            {/* <a href="https://www.facebook.com/CarpetAdvantage">
                <YoutubeFilled/>
            </a> */}


        </div>
        <nav>
            <ul>
                {links.map((x, i) => (
                     <NavLink to={x.link} activeClassName="selected-link">
                        <li key={i}>{x.name}</li>
                    </NavLink>
                ))}    
            </ul>  
        </nav>

        <p className="iandb">
            Fully Insured and Bonded  
        </p>

        <p className="copyright">
            Copyright {String.fromCharCode(169)} {new Date().getFullYear()} Carpet Advantage - All Rights Reserved.
        </p>
        
    
        
    </footer>
    
  );
}

export default Footer;