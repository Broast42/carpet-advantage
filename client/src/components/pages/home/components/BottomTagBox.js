import React from 'react';
import apartmentbld from './bottomtagimg/apartmentbld.jpg';
import houses from './bottomtagimg/houses.jpeg';
import rotovac from './bottomtagimg/rotovac.jpeg';

const BottomTagBox = () => {
    return(
        <div>
            <div className="btm-title">
                <h2>Serving North East Ohio</h2>
            </div>
            <div  className="bottom-tag-container">
                <div>
                    <img src={apartmentbld} alt="apartment building"/>
                    <div className="btm-tag-title" >
                        <h3>Apartment Industry</h3>
                    </div>
                    <div className="btm-tag-info">
                        <p>Vacants</p>
                        <p>Occupides</p>
                        <p>Common Areas</p>
                    </div>
                </div>
                <div>
                    <img src={houses} alt="Houses drawing"/>
                    <div className="btm-tag-title" >
                        <h3>Partner with property and maintenance managers</h3>
                    </div>
                    <div className="btm-tag-info">
                        <p>Keep up to your standards on your common areas with our CACCMP.  </p>
                        <p>Common Area Carpet Cleaning Maintenance Plan</p>
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
        </div>
    );
};

export default BottomTagBox;
