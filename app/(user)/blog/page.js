'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    setBlogs(storedBlogs);
  }, []);

  return (
    <div className="blog-list-container">
      <h1>Books You’ll Love</h1>
      <div className="blog-cards">
        {blogs.length === 0 ? (
          <p>No blogs available.</p>
        ) : (
          blogs.map((blog) => (
            <Link key={blog.id} href={`/blog/${blog.id}`} className="blog-card-link">
              <div className="blog-card">
                {blog.image && (
                  <img
                    src={blog.image}
                    alt="Blog"
                    className="blog-image"
                  />
                )}
                <p className="blog1-title"><strong>Title:</strong> {blog.title}</p>
                <p className="blog-author"><strong>Author:</strong> {blog.author}</p>
                <p className="blog-rating"><strong>Rating:</strong> {blog.rating}</p>
                <button className="read-more-button">Read More</button>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Blog;
