import React from  'react';
import { services } from '../../../data'
import ReactPlayer from 'react-player/youtube';
import { videos } from '../../../data';

const Services = () => {

    return (
        <div className="services">
            <h1>Services</h1>
            <div className="service-window">
                <div>
                    {videos.map((video, index) =>(
                        <div key={index} className="video-card">
                            <ReactPlayer 
                                url={video.url}
                                height= '250px'
                                width = '425px'
                            /> 
                        </div>
                    ))}
                </div>
                <div className="services-list-window">
                    {services.map((val, index) =>(
                        <div className="service-card" key={index}>
                            <h2>{val.cateagory}</h2>
                            {val.services.map((service, index) =>(
                                <p key={index}>{service}</p>
                            ))}
                        </div>    
                    ))}
                </div>
            </div>
        </div>

    )
};

export default Services;