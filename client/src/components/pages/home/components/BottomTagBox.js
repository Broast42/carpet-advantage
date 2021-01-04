import React from 'react';
import { Link } from 'react-router-dom';
import apartmentbld from './bottomtagimg/apartmentbld.jpg';
import houses from './bottomtagimg/houses.jpeg';
import rotovac from './bottomtagimg/RotovacFrontView.jpg';
import realPage from './bottomtagimg/real-page.png';
import vendorCafe from './bottomtagimg/vendor-cafe.png';

const BottomTagBox = () => {
    return(
        <div>
            <div className="btm-title">
                <h2>Serving Northeast Ohio</h2>
            </div>
            <div  className="bottom-tag-container">
                <div>
                    <img src={apartmentbld} alt="apartment building"/>
                    <div className="btm-tag-title" >
                        <h3>Apartment Industry</h3>
                    </div>
                    <div className="btm-tag-info">
                        <p>Vacants</p>
                        <p>Occupide Apartments</p>
                        <p>Common Areas</p>
                    </div>
                </div>
                <div>
                    <img src={houses} alt="Houses drawing"/>
                    <div className="btm-tag-title" >
                        <h3>Partner with property and maintenance managers</h3>
                    </div>
                    <div className="btm-tag-info">
                        <Link to="/camp">
                            <p>Keep up to your standards on your common areas with CAMP .  </p>
                            <p>Common Area Maintenance Plan</p>
                        </Link>
                        
                    </div>
                </div>
                <div>
                    <img src={rotovac} alt="Rotovac wand head"/>
                    <div className="btm-tag-title" >
                        <h3>Equipment, solutions, technique, and customer relationships</h3>
                    </div>
                    <div className="btm-tag-info">
                        <p>
                            Use the right equipment, 
                            the right solutions, 
                            the right technique and the best customer relationships in the industry!
                        </p>
                        
                    </div>
                </div>
            </div>
            <div className="payment">
                <p>We partner with these payment proccesing vendors.</p>
                <a href="https://www.realpage.com">
                    <img src={realPage} alt="RealPage Logo" />
                    <p>RealPage</p>
                </a>
                <a href="https://www.vendorcafe.com/">
                    <div className="vendor-cafe">
                        <img src={vendorCafe} alt="VendorCafe Logo" />
                    </div>
                </a>
                
            </div>
        </div>
    );
};

export default BottomTagBox;
