import { useEffect, useState } from 'react';
import API from './api';
import { Link } from 'react-router-dom';

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    API.get('/blogs/').then(res => setBlogs(res.data));
  }, []);

  return (
    <div>
      <h2>All Blogs</h2>
      {blogs.map(blog => (
        <div key={blog.id}>
          <h3><Link to={`/blog/${blog.id}`}>{blog.title}</Link></h3>
          <p>By: {blog.author_name}</p>
        </div>
      ))}
    </div>
  );
}
