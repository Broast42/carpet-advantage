import React from  'react';
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
                <div>
                    list
                </div>
            </div>
        </div>

    )
};

export default Services;