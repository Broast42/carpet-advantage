import React, { useState, useEffect, useCallback } from 'react';
import before1 from './realimg/before1.jpg'
import after1 from './realimg/after1.jpg'

function TagBox() {

    const [before, setBefore] = useState(true)
    const [after, setAfter] = useState(false)

    const setPic = useCallback(() => {
        setBefore(!before)
        setAfter(!after)
        
    },[before, after])
    
    useEffect(() =>{
        setTimeout(setPic, 7000)    
    },[setPic])

    

    return (
        <section className="home-main-section">
            <div className="tag-box">
                <h2>CLEAN, REPAIR, REVITALIZE</h2>
                <div className="tag-line-2">
                    <p>Don't condemn your carpet.</p> 
                    <p>Call Carpet Advantage.</p>
                    <p>Let us have at it!</p>
                </div>       
            </div>

            <figure className="pic-real-box">
                <div className="pic-box">
                    <img className={`pic-an ${before === true ? "disBlock": "disNone"}`} src={before1} alt="Dirty Carpet"/>
                    <img className={`pic-an ${after === true ? "disBlock": "disNone"}`} src={after1} alt="Clean Carpet"/>
                </div>
                <figcaption className="pic-descript">
                    <p className={` ${before === true ? "disBlock": "disNone"}`}>BEFORE -- "This isn't surprising, a lot of vacants look like this."</p>
                    <p className={` ${after === true ? "disBlock": "disNone"}`}>AFTER -- "Awesome, now our resident can move in"</p>
                </figcaption>
            </figure>
        </section>
        
        
    );
}

export default TagBox;