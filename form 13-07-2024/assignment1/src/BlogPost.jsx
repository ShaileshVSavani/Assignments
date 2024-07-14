


import React from 'react';
import './BlogPost.css';

const BlogPost = ({ post, onEdit }) => {
  return (
    <div className="blog-post">
      <h2>{post.title}</h2>
      <img src={post.image} alt={post.title} />
      <p>{post.content}</p>
      <p className="post-date">{post.date}</p>
      <button onClick={() => onEdit(post)}>Edit</button>
    </div>
  );
};

export default BlogPost;
