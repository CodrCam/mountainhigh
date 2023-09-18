import React, { useState } from 'react';
import '../CSS/UrbanExploration.css';
import { urbanPhotos } from './photosData';

const UrbanExploration = () => {
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const handlePhotoClick = (id) => {
        setSelectedPhoto(id);
    };

    const handleCloseModal = () => {
        setSelectedPhoto(null);
    };

    return (
        <div className="urban-container">
            {urbanPhotos.map((photo, i) => (
                <React.Fragment key={photo.id}>
                    <section className={`parallax-section-urban`} id={`urban${photo.id}`}>
                        <div className={`content-container-urban ${i % 2 === 0 ? '' : 'right'}`}>
                            <h1>{photo.title}</h1>
                        </div>
                        <div className={`thumbnail-container ${i % 2 === 0 ? 'right' : ''}`}>
                            <img className="static-thumbnail" src={photo.thumbnail} alt={photo.title} onClick={() => handlePhotoClick(photo.id)} />
                        </div>
                    </section>
                    <section className="white-space-urban"></section>
                </React.Fragment>
            ))}

            {selectedPhoto && (
                <div className="photo-modal" onClick={handleCloseModal}>
                    <div className="modal-content">
                    <img src={urbanPhotos.find(p => p.id === selectedPhoto).thumbnail} alt={selectedPhoto} />
                        <p>{urbanPhotos.find(p => p.id === selectedPhoto).description}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default UrbanExploration;
