import React from 'react';
import ReactPlayer from 'react-player/youtube';
import Renewal from '../../../docs/renewal.pdf';
import Electrostatic from '../../../docs/electrostatic-quick-sheet.pdf';
import ElectroQA from '../../../docs/electrostatic-qa.pdf';
import { library, videos } from '../../../data';


const Library = () => {

    const matchImport = (string) => {
        switch (string) {
            case 'Renewal':
                return Renewal
            case 'Electrostatic':
                return Electrostatic
            case 'ElectroQA':
                return ElectroQA
            default:
                return null

        }
    }
    
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
                            <a href={matchImport(doc.link)} >
                                <button className="btn-view">View</button>
                            </a>
                        </div>
                        <div className="doc-btn">
                            <a href={matchImport(doc.link)} download >
                                <button className="btn-dwn">Download</button>
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <div className="doc-vid-box">
                {videos.map((vid, index) => (
                    <div key={index}>
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