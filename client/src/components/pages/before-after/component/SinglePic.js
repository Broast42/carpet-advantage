import React from 'react';
import { Image } from 'antd';

const SinglePic = props => {

    const { name, desc, before, after, afterDesc } = props.data;

    return(
        <div className="multi-pic">
            <h3>{name}</h3>
            <div className="single-container flex">
                
                    <Image
                        width={300}
                        src={`/img/${before}`}
                    />
                    <p>{desc}</p>
                
            </div>
            <div className="single-container flex">
                
                <Image
                    width={300}
                    src={`/img/${after[0]}`}
                />
                <p>{afterDesc}</p>
            
            </div>

        </div>
    )
}

export default SinglePic;