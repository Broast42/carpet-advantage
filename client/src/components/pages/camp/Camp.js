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
                    <span className="large-letter">C</span>OMMON {" "}
                    <span className="large-letter">A</span>ERAS {" "}
                    <span className="large-letter">M</span>AINTENANCE {" "}
                    <span className="large-letter">P</span>LAN 
                </p>
            </div>
            
            <div className="camp-text-area">
                <p>Stay Ahead of your carpet cleaning with our C.A.M.P. program</p>
                <p className="subtext">
                    Camping —it’s a lot like managing the maintenance of an apartment complex. 
                    Without the proper planning, you’re an absolute mess 
                    <span className="sub-it">—cold, hungry, covered in bugs</span> .
                </p>
            </div>

            <div className="camp-info">
                <p>Ease your budget 
                <span className="blue"> —10% off when you book 30 days in advance</span></p>
                <ul className="camp-list">
                    <li>Extend the life of your carpet and keep it fresh!</li>
                    <li>Remove scheduling from your to do list and put it on ours!</li>
                    <li>Residents and landlords are happy!</li>
                </ul>
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