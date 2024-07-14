/*  Form with style
Assignment Title: Building a Blog Application with React
 Develop a feature-rich blog application using React that enables users to read, create, and manage blog posts. Emphasize efficient routing, state management, and a visually appealing user interface.

Your mission is to create a sophisticated blog application using React. This application should empower users to seamlessly read blog posts, effortlessly craft new ones, and adeptly manage existing posts. Additionally, prioritize the creation of a visually captivating and user-friendly interface.
: Commence by establishing a new React application utilizing Create React App or an equivalent tool.: Architect the Blog Application with the following crucial components:
Blog Post List: Present a list of blog posts, encompassing titles, images, content, and publication dates.
Add New Post Form: Enable users to introduce new blog posts through a user-friendly form that solicits title, content, and image.
: Employ React state as the cornerstone for managing the blog posts. Keep an up-to-date array of blog post objects and ensure it evolves as new posts come into existence.: Retrieve and exhibit blog posts from a predetermined list or an external source, showcasing a seamless reading experience.: Facilitate users in creating new blog posts by offering fields for title, content, image, and publication date. Implement editing functionality for existing posts to ensure content management.: Infuse CSS styling to fashion a captivating and user-friendly interface. Concentrate on optimizing readability and aesthetics, paying heed to fonts, colors, and layout.: Organize your code into modular React components to foster code structure and maintainability. Utilize separate components for the list of blog posts, individual post details, and the blog post creation and editing forms. This structural approach streamlines development and enhances maintainability. */

// src/App.js
import React, { useState } from 'react';
import BlogPostList from './BlogPostList';
import BlogPostForm from './BlogPostForm';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [postToEdit, setPostToEdit] = useState(null);

  const handleSavePost = (post) => {
    if (postToEdit) {
      setPosts(posts.map(p => (p.id === post.id ? post : p)));
      setPostToEdit(null);
    } else {
      setPosts([...posts, post]);
    }
  };

  const handleEditPost = (post) => {
    setPostToEdit(post);
  };

  return (
    <div className="app">
      <h1>My Blog</h1>
      <BlogPostForm onSave={handleSavePost} postToEdit={postToEdit} />
      <BlogPostList posts={posts} onEdit={handleEditPost} />
    </div>
  );
};

export default App;
