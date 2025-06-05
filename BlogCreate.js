import { useState } from 'react';
import API from './api';
import { useNavigate } from 'react-router-dom';

export default function BlogCreate() {
  const [form, setForm] = useState({ title: '', content: '' });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    await API.post('/blogs/create/', form);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Blog</h2>
      <input name="title" placeholder="Title" onChange={handleChange} required />
      <textarea name="content" placeholder="Content" onChange={handleChange} required />
      <button type="submit">Publish</button>
    </form>
  );
}
