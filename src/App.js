import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import styled from 'styled-components';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Podcast from './pages/Podcast';
import ClimbingPhotos from './pages/ClimbingPhotos';
import SkiingPhotos from './pages/SkiingPhotos';
import UrbanExploration from './pages/UrbanExploration';

const Navbar = styled.nav`
    display: flex;
    justify-content: space-around;
    padding: 20px 0;
    background-color: #333;
`;

const NavLink = styled(Link)`
    color: white;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

function App() {
  return (
    <Router>
      <Navbar>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/podcast">Podcast</NavLink>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/climbing-photos" element={<ClimbingPhotos />} />
        <Route path="/urban-exploration" element={<UrbanExploration />} />
        <Route path="/skiing-winter" element={<SkiingPhotos />} />
      </Routes>
    </Router>
  );
}

export default App;
