import React, { useState, useEffect, useCallback } from 'react';
import statichair from './electroimg/statichair.jpeg'

function ElectroStatic() {

    const [panel, setPanel] = useState(1);

    const changePanel = useCallback(() => {
        if(panel === 4){
            setPanel(1)
        }else{
            setPanel(panel + 1)
        }
    },[panel])

    useEffect(() => {
        const interval = setInterval(changePanel, 8000);
        return () => clearInterval(interval)
    },[changePanel])
    

    return (
        <div>
            <div className="electro-title">
                <h3>Electrostatic Disinfecting</h3>    
            </div>
            <div className="electro-tagline">
                <div>
                    <p>A New Standard in Infection Control</p>
                </div>
                <div>
                    <p>Peace of mind is worth its weight in gold.</p>
                    <p>Spraying and wiping surfaces is important to remove dirt and grime.</p>
                    <p>But the act of electrostatic disinfecting is one more step to insuring a clean and safe environment.</p>
                </div> 
            </div>

            <div className="electro-box">
                <figure className="electro-img">
                    <img className="static-girl" src={statichair} alt="Girl with static hair" />
                </figure>
                <div className="electro-container">
                    <div className="electro-info-container">

                        <div className={`electro-info-box ${panel === 1 ? "disBlock" : "disNone"}`}>
                            <div className="electro-info-title">
                                <p>Electrostatic Disinfecting</p>
                            </div>
                            <div className="electro-info-content">
                                <p>
                                    Our machine puts a charge on the solution 
                                    just as it exits the nozzle; then the atomized 
                                    disinfectant wraps 360 degrees around all surfaces 
                                    even hard to reach areas.
                                </p>
                            </div>
                        </div>

                        <div className={`electro-info-box ${panel === 2 ? "disBlock" : "disNone"}`}>
                            <div className="electro-info-title">
                                <p>EPA approved disinfectant</p>
                            </div>
                            <div className="electro-info-content">
                                <p>
                                    Our broad spectrum disinfectant is non-abrasive, 
                                    non-corrosive, and no personal protective equipment is needed.
                                </p>
                            </div>
                        </div>

                        <div className={`electro-info-box ${panel === 3 ? "disBlock" : "disNone"}`}>
                            <div className="electro-info-title">
                                <p>Touchpoints</p>
                            </div>
                            <div className="electro-info-content">
                                <p>
                                    Fittness rooms, door handles, railings,
                                    party rooms, laundry rooms, elevators,
                                    mail centers, public bathrooms, and locker rooms, 
                                    just to name a few!
                                </p>
                            </div>
                        </div>

                        <div className={`electro-info-box ${panel === 4 ? "disBlock" : "disNone"}`}>
                            <div className="electro-info-title electro-title-spacing">
                                <p>Can be performed during business hours</p>
                            </div>
                            <div className="electro-info-content">
                                <div className="electro-number">
                                    <p>For pricing please call:</p>
                                    <a href="tel:440-729-8350">(440) 729-8350</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    
  );
}

export default ElectroStatic;