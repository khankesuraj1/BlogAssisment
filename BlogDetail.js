import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from './api';

export default function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    API.get(`/blogs/${id}/`).then(res => setBlog(res.data));
  }, [id]);

  if (!blog) return <p>Loading...</p>;

  return (
    <div>
      <h2>{blog.title}</h2>
      <p>By: {blog.author_name}</p>
      <p>{blog.content}</p>
    </div>
  );
}
