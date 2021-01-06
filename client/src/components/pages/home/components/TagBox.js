import React, { useState, useEffect, useCallback } from 'react';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import before1 from './realimg/clean_before.jpeg'
import after1 from './realimg/clean_after.jpeg';
import stretchBefore from './realimg/stretch-before.jpg';
import stretchAfter from './realimg/stretch_after.jpg';
import patchBefore from './realimg/patch_before.jpg';
import patchAfter from './realimg/patch_after.jpg';

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

    const contentStyle = {
        height: '368px',
        width: '100%',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };

    

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

            <div className="pic-real-box">
                <Carousel autoplay>
                    <div>
                        <img style={contentStyle} src={before1} alt="Dirty Carpet"/>
                    </div>
                    <div>
                        <img style={contentStyle} src={after1} alt="Clean Carpet"/>
                    </div>
                    <div>
                        <img style={contentStyle} src={stretchBefore} alt="Wrinkely carpet"/>
                    </div>
                    <div>
                        <img style={contentStyle} src={stretchAfter} alt="No more wrinkles"/>
                    </div>
                    <div>
                        <img style={contentStyle} src={patchBefore} alt="Frayed carpet at threshold"/>
                    </div>
                    <div>
                        <img style={contentStyle} src={patchAfter} alt="No more fray"/>
                    </div>
                </Carousel>

            </div>
            
        </section>
        
        
    );
}

export default TagBox;