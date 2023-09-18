import React, { useState } from 'react';
import '../CSS/SkiingPhotos.css'; 
import { skiingPhotos } from './photosData'; 

const SkiingPhotos = () => {
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const handlePhotoClick = (id) => {
        setSelectedPhoto(id);
    };

    const handleCloseModal = () => {
        setSelectedPhoto(null);
    };

    return (
        <div className="skiing-container">
            {skiingPhotos.map((photo, i) => (
                <React.Fragment key={photo.id}>
                    <section className={`parallax-section-skiing`} id={photo.id}>
                        <div className={`content-container-skiing ${i % 2 === 0 ? '' : 'right'}`}>
                            <h1>{photo.title}</h1>
                        </div>
                        <div className={`thumbnail-container ${i % 2 === 0 ? 'right' : ''}`}>
                            <img className="static-thumbnail" src={photo.thumbnail} alt={photo.title} onClick={() => handlePhotoClick(photo.id)} />
                        </div>
                    </section>
                    <section className="white-space-skiing"></section>
                </React.Fragment>
            ))}

            {selectedPhoto && (
                <div className="photo-modal" onClick={handleCloseModal}>
                    <div className="modal-content">
                        <img src={skiingPhotos.find(p => p.id === selectedPhoto).thumbnail} alt={selectedPhoto} />
                        <p>{skiingPhotos.find(p => p.id === selectedPhoto).description}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SkiingPhotos;
