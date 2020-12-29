import React from 'react';
import MultiPic from "./component/MultiPic";
import SinglePic from "./component/SinglePic";
import { beforeAfter } from "../../../data";

const BeforAndAfter = () => {

    return(
        <section>
            <div className="before-after-title">
                <h1>Before And After</h1>
            </div>
            <div className="before-after-heading">
                <h2>Take a look at some of our work.</h2>
                <p>click on any picture for a better view</p>
            </div>
            <div className="before-after-main">
                {beforeAfter.map((x, index) => (
                    <div key={index}>
                        {x.after.length > 1 ? 
                            <MultiPic data={x}/>
                        :
                            <SinglePic data={x}/>
                        }
                    </div>
                ))}
                
                {/* <MultiPic/>
                <SinglePic/> */}
            </div>
        </section>
    )
}

export default BeforAndAfter;