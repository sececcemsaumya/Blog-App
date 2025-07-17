'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [author, setAuthor] = useState('');
  const [rating, setRating] = useState('');
  const router = useRouter();

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const base64Image = image ? await convertToBase64(image) : null;

    const newBlog = {
      id: Date.now(),
      title,
      content,
      image: base64Image,
      author,
      rating,
    };

    const existingBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    existingBlogs.push(newBlog);
    localStorage.setItem('blogs', JSON.stringify(existingBlogs));

    router.push('/bloglist');
  };

  return (
    <div className="loginpage">
      <form className="blog-page" onSubmit={handleSubmit}>
        <p className="blog-head">Create Blog</p>
        <div className="blog-content">

          <div className="blog-title">
            <label>Book Title</label><br />
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              className="rounded borderless outline blog1"
              required
            />
          </div>
          <br />

          <div className="blog-description">
            <label>Book Description</label><br />
            <textarea
              onChange={(e) => setContent(e.target.value)}
              value={content}
              className="rounded borderless outline blog2"
              required
            />
          </div>
          <br />

          <div className="blog-author">
            <label>Author Name</label><br />
            <input
              type="text"
              onChange={(e) => setAuthor(e.target.value)}
              value={author}
              className="rounded borderless outline blog4"
              required
            />
          </div>
          <br />
          <div className="blog-info">
          <div className="blog-rating">
            <label>Rating (out of 5)</label><br />
            <input
              type="number"
              min="1"
              max="5"
              step="0.1"
              onChange={(e) => setRating(e.target.value)}
              value={rating}
              className="rounded borderless outline blog5"
              required
            />
          </div>
          <br />

          <div className="blog-image">
            <label>Blog Image</label><br />
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              className="rounded borderless outline blog3"
              required
            />
          </div>
          <br />

          </div>

          <button type="submit" className="submit rounded borderless blogbtn">
            Create Blog
          </button>

        </div>
      </form>
    </div>
  );
};

export default CreateBlog;
