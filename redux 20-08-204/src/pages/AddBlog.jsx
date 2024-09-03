
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CreateBlog } from "../redux/blog/Action";
import { PostBlogData } from "../redux/blogApi/Action";

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
      // id: Date.now(),
    };

    // if (blog.title === '' || blog.img === '' || blog.content === '') return;

    // dispatch(CreateBlog(blog));
    dispatch(PostBlogData(blog));
    setContent("");
    setImg("");
    setTitle("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center">Create a New Blog</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              placeholder="Enter blog title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <input
              type="url"
              placeholder="Enter image URL"
              value={img}
              onChange={(e) => setImg(e.target.value)}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Content</span>
            </label>
            <textarea
              placeholder="Enter blog content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="textarea textarea-bordered w-full"
              required
            ></textarea>
          </div>
          <div className="form-control mt-4">
            <button type="submit" className="btn btn-outline w-full">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
