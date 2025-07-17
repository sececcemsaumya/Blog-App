'use client';
import { useEffect, useState } from 'react';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const savedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    setBlogs(savedBlogs);
  }, []);

  const handleDelete = (id) => {
    const updatedBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(updatedBlogs);
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
  };

  return (
    <div className="blog-list-container">
      <h1>All Blogs</h1>
      <div className="blog-cards">
        {blogs.length === 0 ? (
          <p>No blogs available.</p>
        ) : (
          blogs.map((blog) => (
            <div key={blog.id} className="blog-card">
              {blog.image && (
                <img src={blog.image} alt="Blog" className="blog-image" />
              )}
              <p className="blog1-title"><strong>Title:</strong> {blog.title}</p>
              <p className="blog-author"><strong>Author:</strong> {blog.author}</p>
              <p className="blog-rating"><strong>Rating:</strong> {blog.rating}</p>
              <button onClick={() => handleDelete(blog.id)} className="delete-button">
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BlogList;
