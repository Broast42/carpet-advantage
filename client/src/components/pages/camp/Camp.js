import React from 'react';
import Hallway1 from './campimg/hallway1.jpg';
import Hallway2 from './campimg/hallway2.jpg';
import Door1 from './campimg/door1.jpg';

const Camp = () =>{

    return(
        <section>
            <div className="camp-header">
                <h1>C.A.M.P.</h1>
            </div>
           
            <div className="camp-acronym">
                <p>
                    <span className="large-letter">C</span>ommon {" "}
                    <span className="large-letter">A</span>era {" "}
                    <span className="large-letter">M</span>aintenance {" "}
                    <span className="large-letter">P</span>lan 
                </p>
            </div>
            
            <div className="camp-text-area">
                <p>Stay Ahead of your carpet cleaning with our C.A.M.P. program</p>
            </div>

            <div className="camp-pics">
                <img src={Hallway2} alt="A common hallway" />
                <img src={Door1} alt="An appartment doorway" />
                <img src={Hallway1} alt="Another common hallway"/>
            </div>
        </section>
    )
}

export default Camp;