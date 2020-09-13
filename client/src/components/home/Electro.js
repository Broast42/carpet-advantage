import React from 'react';
import statichair from './electroimg/statichair.jpeg'
function Electro() {
  return (
    <section>
        <div className="electro-box">
            <div className="new-title-box">
                <div className="new-text">
                    NEW!
                </div>
                
            </div>
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
                </div>
                <div>
                    <p>But the act of electrostatic disinfecting is one more step to insuring a clean and safe enviroment.</p>
                </div> 
            </div>
            <div className="electro-bubble-box">
                <div className="electro-box-half flex-center">
                    <img className="static_girl" src={statichair} alt="Girl with static hair"/>
                </div>
                <div className="electro-box-half">
                    <div className="info-bubble buble-pos">
                        <div className="info-bubble-flex">
                            <div className="bubble-outer back-grey">
                                <p>Electrostatic Disinfecting</p> 
                            </div>
                            <div className="extra-info">
                                <li>
                                    Our machine puts a charge on the solution 
                                    just as it exits the nozzle; then the atomized 
                                    disinfectant wraps 360 degrees around all surfaces 
                                    even hard to reach areas.
                                </li>
                            </div>
                        </div>
                        
                    </div>
                    <div className="info-bubble buble-pos2">
                        <div className="info-bubble-flex">
                            <div className="bubble-outer back-yellow">
                                <p>EPA approved dissinfectant</p>
                            </div>
                            <div className="extra-info">
                                <li>
                                    Our broad spectrum disinfectant is non-abrasive, 
                                    non-corrosive, and no personal protective equipment is needed.
                                </li>
                            </div>
                        </div>

                    </div>
                    <div className="info-bubble">
                        <div className="info-bubble-flex">
                            <div className="bubble-outer bubble-3 back-blue">
                                <p>Touchpoints</p>
                            </div>
                            <div className="extra-info">
                                <li>
                                    Fittness rooms, door handels, railings,
                                    party rooms, laundry rooms, elevators,
                                    mail centers, public bathrooms, and locker rooms, 
                                    just to name a few!
                                </li>
                            </div>
                        </div>
                    </div>
                    <div className="info-bubble buble-pos4">
                        <div className="info-bubble-flex">
                            <div className="bubble-outer back-green">
                                <p>Can be preformed during regular business hours</p>
                            </div>
                            <div className="extra-info">
                                
                            </div>
                        </div>
                    </div>
                    <div className="info-bubble2 buble-pos3">
                    <div className="info-bubble-flex">
                            <div className="bubble-outer-last back-orange">
                                <div>
                                    <p>For pricing please call:</p>
                                    <a href="tel:440-729-8350">(440) 729-8350</a>
                                </div>
                                
                            </div>
                            <div className="extra-info">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
    
  );
}

export default Electro;