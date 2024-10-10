import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createBlog } from "../redux/Blog/Action";
import '../Css/AddBlog.css'; // Import the CSS file

const AddBlog = () => {
  let [title, setTitle] = useState("");
  let [img, setImg] = useState("");
  let [content, setContent] = useState("");
  let dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    let blog = {
      title,
      img,
      content,
      id: Date.now(),
    };

    dispatch(createBlog(blog));
    setTitle("");
    setImg("");
    setContent("");
  };

  return (
    <div className="add-blog-container">
      <form onSubmit={handleSubmit} className="add-blog-form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="url"
          placeholder="Image URL"
          value={img}
          onChange={(e) => setImg(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddBlog;
