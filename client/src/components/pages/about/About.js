import React from 'react';
import { aboutTags } from '../../../data';
import apartment from './aboutimg/apartmentbld.jpg';
import apartment2 from './aboutimg/apartmentbld2.jpg';
import flag from './aboutimg/flag.jpg'

const About = () => {

    return (
        <section>
            <div className="about">
                 <h1>About Us</h1>
            </div>
           
            <article className="about-container">
                <div>
                    <p>
                        Carpet Advantage is a professional carpet cleaning and repair company. 
                        Locally owned and operated; we’ve been cleaning and revitalizing carpets all over Northeast Ohio since 1989. 
                        We receive new customers mostly from referral business and pride ourselves in 
                        maintaining strong business relationships, resulting in repeat business. 
                        Upon request, we will provide a BWC certificate, W9 and or Certificate of Insurance. 
                    </p>

                    <h2>Technicians</h2>

                    <p>
                        Our technicians have years of cleaning experience and they take extreme pride in their work. 
                        They’re professional in appearance and behavior and are constantly building their skills. 
                        You’ll get to know our team and you’ll have a great experience working with them. 
                    </p>

                    <h2>Office</h2>

                    <p>
                        Our office understands the importance of making things happen quickly and smoothly at a competitive price.  
                        Just call to book a carpet cleaning or repair. 
                    </p>

                    <h2>Ownership</h2>

                    <p>
                        Bruce Botimer is the Carpet Advantage owner and head technician. 
                        He has over 25 years of carpentry experience and he is hands on with staff, equipment, repairs and estimates. 
                        In 2015, Bruce was looking to make a transition from working as a union carpenter in the commercial construction world back into business ownership.  
                        He researched Carpet Advantage and could see that the owners had put in years of hard work since 1989 and they had built a well-established company 
                        in the apartment and housing industry; it was just time for them to retire.  
                        Bruce was confident that he could easily transfer his carpentry and problem solving skills to owning and operating a successful carpet cleaning business. 
                        The opportunity made sense and Carpet Advantage has been growing ever since.   
                    </p>

                </div>

                <div>
                    <img src={flag} alt="American Flag" />
                </div>
                  
            </article>
        
            <article className="about-bottom">
                {aboutTags.map((box, index) => (
                    <div key={index} className="about-tag-box">
                        <div className="about-tag-pic">
                            <img src={box.pic === 'apartment' ? apartment : apartment2} alt={box.alt}/>
                        </div>
                        <h3>{box.tagline}</h3>
                        {box.descrips.map((line, index) =>(
                            <p key={index}>{line}</p>
                        ))}

                    </div>
                ))}
            </article>
        
        </section>
    )
}

export default About;