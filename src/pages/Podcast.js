import React from 'react';
import '../CSS/Podcast.css';

const Podcast = () => {
    return (
        <div className="podcast-container">
            <section className="parallax-section" id="section1">
                <div className="content-container">
                    <h1>Podcast Episode 1</h1>
                    <p>Description and details about Podcast Episode 1...</p>
                </div>
            </section>
            <section className="white-space"></section>

            <section className="parallax-section" id="section2">
                <div className="content-container">
                    <h1>Podcast Episode 2</h1>
                    <p>Description and details about Podcast Episode 2...</p>
                </div>
            </section>
            <section className="white-space"></section>

            {/* ... Add more sections as needed ... */}

        </div>
    );
}

export default Podcast;
