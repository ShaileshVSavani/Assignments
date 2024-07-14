


import React, { useState, useEffect } from 'react';
import './BlogPostForm.css';

const BlogPostForm = ({ onSave, postToEdit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    if (postToEdit) {
      setTitle(postToEdit.title);
      setContent(postToEdit.content);
      setImage(postToEdit.image);
      setDate(postToEdit.date);
    }
  }, [postToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
      // onSave({ title, content, image, date, id: postToEdit ? postToEdit.id : Date.now() });
       
    const newPost = {
        title: title,
        content: content,
        image: image,
        date: date,
        id: postToEdit ? postToEdit.id : Date.now(),
      };
      
    
      onSave(newPost);
    setTitle('');
    setContent('');
    setImage('');
    setDate('');
  };

  return (
    <form className="blog-post-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default BlogPostForm;
