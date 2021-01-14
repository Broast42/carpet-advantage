import React from 'react';
import ReactPlayer from 'react-player/youtube';
import { library, videos } from '../../../data';


const Library = () => {
    
    return (
        <section>
            <div className="library">
                <h1>Library</h1>
            </div>
            
            <div className="library-heading">
                <h2>Here is where you can find helpful documents and videos all in one place.</h2>
            </div>

            <div className="doc-window">
                {library.map((doc, index) => (
                    <div key={index} className="document-box">
                        <div className="doc-desc">
                            <h3>{doc.name}</h3>
                            <p>{doc.desc}</p>
                        </div>
                        <div className="doc-btn">
                            <a href={`/docs/pdf/${doc.pdf}`} >
                                <button className="btn-view">View</button>
                            </a>
                        </div>
                        <div className="doc-btn">
                            <a href={`/docs/pdf/${doc.pdf}`} download >
                                <button className="btn-dwn">Download</button>
                            </a>
                        </div>
                        {doc.docx !== null ?
                            <div className="doc-btn">
                                <a href={`/docs/docx/${doc.docx}`} download >
                                    <button className="btn-dwn">word/docx</button>
                                </a>
                            </div>
                        :
                            null
                        }
                    </div>
                ))}
            </div>

            <div className="doc-vid-box">
                {videos.map((vid, index) => (
                    <div key={index} className="video">
                        <ReactPlayer 
                            url={vid.url}
                            height= '250px'
                            width = '425px'
                        />
                    </div>
                ))}
            </div>
            
            
        </section>
    )
}

export default Library;