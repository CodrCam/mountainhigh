import React from 'react';
import '../CSS/Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">

      <section className="intro-section">
        <img src="/Media/Photos/Profile.jpg" alt="Cameron Griffin" className="profile-pic" />
        <h1>Welcome to Mountain High Productions</h1>
        <p>A blend of professional experiences, technical skills, and a deep connection to the community.</p>
      </section>

      <section className="highlight-section">
        <h2>Highlights</h2>
        <div className="highlight-content">
          <div className="highlight-item">
            <Link to="/climbing-photos">
              <img src="/Media/Photos/ClimbingMain.jpg" alt="Climbing" className="highlight-img" />
            </Link>
            <h3>Climbing</h3>
            <p>Discover my climbing adventures and experiences.</p>
          </div>

          <div className="highlight-item">
            <img src="/Media/Photos/SeattleSkyline.jpg" alt="Urban Exploration" className="highlight-img" />
            <h3>Urban Exploration</h3>
            <p>Dive into the urban landscapes I've explored.</p>
          </div>

          <div className="highlight-item">
            <img src="/Media/Photos/skiing.jpg" alt="Skiing/Winter" className="highlight-img" />
            <h3>Skiing/Winter</h3>
            <p>Join me in the snowy landscapes and skiing trips.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
