import React, { useState } from 'react';
import '../CSS/ClimbingPhotos.css';
import { climbingPhotos } from './photosData';

const ClimbingPhotos = () => {
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const handlePhotoClick = (id) => {
        setSelectedPhoto(id);
    };

    const handleCloseModal = () => {
        setSelectedPhoto(null);
    };

    return (
        <div className="climbing-container">
            {climbingPhotos.map((photo, i) => (
                <React.Fragment key={photo.id}>
                    <section className={`parallax-section-climbing`} id={photo.id}>
                        <div className={`content-container-climbing ${i % 2 === 0 ? '' : 'right'}`}>
                            <h1>{photo.title}</h1>
                        </div>
                        <div className={`thumbnail-container ${i % 2 === 0 ? 'right' : ''}`}>
                            <img className="static-thumbnail" src={photo.thumbnail} alt={photo.title} onClick={() => handlePhotoClick(photo.id)} />
                        </div>
                    </section>
                    <section className="white-space-climbing"></section>
                </React.Fragment>
            ))}

            {selectedPhoto && (
                <div className="photo-modal" onClick={handleCloseModal}>
                    <div className="modal-content">
                    <img src={climbingPhotos.find(p => p.id === selectedPhoto).thumbnail} alt={selectedPhoto} />
                        <p>{climbingPhotos.find(p => p.id === selectedPhoto).description}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ClimbingPhotos;
