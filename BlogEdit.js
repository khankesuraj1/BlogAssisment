import { useEffect, useState } from 'react';
import API from './api';
import { useNavigate, useParams } from 'react-router-dom';

export default function BlogEdit() {
  const { id } = useParams();
  const [form, setForm] = useState({ title: '', content: '' });
  const navigate = useNavigate();

  useEffect(() => {
    API.get(`/blogs/${id}/`).then(res => {
      setForm({ title: res.data.title, content: res.data.content });
    });
  }, [id]);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    await API.put(`/blogs/${id}/edit/`, form);
    navigate(`/blog/${id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Blog</h2>
      <input name="title" value={form.title} onChange={handleChange} required />
      <textarea name="content" value={form.content} onChange={handleChange} required />
      <button type="submit">Update</button>
    </form>
  );
}
