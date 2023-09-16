import React from 'react';
import '../CSS/Blog.css';

function Blog() {
  return (
    <div className="blog-container">
      <h1>Blog</h1>
      
      <section className="blog-section">
        <h2>Climbing</h2>
        <p>Placeholder content for climbing...</p>
        <a href="/blog/climbing">Read more</a>
      </section>

      <section className="blog-section">
        <h2>Urban</h2>
        <p>Placeholder content for urban experiences...</p>
        <a href="/blog/urban">Read more</a>
      </section>

      <section className="blog-section">
        <h2>Skiing/Winter</h2>
        <p>Placeholder content for skiing and winter activities...</p>
        <a href="/blog/skiing-winter">Read more</a>
      </section>
    </div>
  );
}

export default Blog;
