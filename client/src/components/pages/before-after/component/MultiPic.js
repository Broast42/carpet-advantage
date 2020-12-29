import React from 'react';
import { Image } from "antd";

const MultiPic = props => {

    const { name, desc, before, after, afterDesc } = props.data;
    

    return (
        <div className="multi-pic">
            <h3>{name}</h3>
            <div className="multi-before flex">
                <Image
                    width={300}
                    src={`/img/${before}`}
                />
                <p>{desc}</p>
            </div>
           
            <div className=' multi-after flex'>
                {after.map((x,index) => (
                    <Image
                        key={index}
                        width={200}
                        src={`/img/${x}`}
                    />
                ))}
            </div>
            <div className="after-desc">
                <p>{afterDesc}</p>
            </div>
            
            
        </div>
    )
}

export default MultiPic;