import React from 'react';
import '../CSS/ClimbingPhotos.css';

const ClimbingPhotos = () => {
    return (
        <div className="climbing-container">
            <section className="parallax-section-climbing" id="climbing1">
                <div className="content-container-climbing">
                    <h1>Photo Title 1</h1>
                    <p>Description about this specific climbing photo...</p>
                </div>
            </section>
            <section className="white-space-climbing"></section>

            <section className="parallax-section-climbing" id="climbing2">
                <div className="content-container-climbing right">
                    <h1>Photo Title 2</h1>
                    <p>Description about this specific climbing photo...</p>
                </div>
            </section>
            <section className="white-space-climbing"></section>

            {/* ... Add more sections as needed ... */}

        </div>
    );
}

export default ClimbingPhotos;
