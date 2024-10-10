import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBlog, updateBlog } from "../redux/Blog/Action";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "../Css/Home.css"; // Import the CSS file
import { getBlogData, getBlogs } from "../redux/BlogApi/Action";
import axios from "axios";

const Home = () => {
  const [show, setShow] = useState(false);
  let [title, setTitle] = useState("");
  let [img, setImg] = useState("");
  let [id, setId] = useState("");
  let [content, setContent] = useState("");

  const handleClose = () => {
    setShow(false);
    let blogData = {
      id: id,
      title: title,
      content: content,
      img: img,
    };
    dispatch(updateBlog(blogData));
  };

  const handleShow = (ele) => {
    setContent(ele.content);
    setTitle(ele.title);
    setImg(ele.img);
    setShow(true);
    setId(ele.id);
  };

  let { blogs } = useSelector((store) => store.blogs);
  console.log(blogs);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBlog(id));
  };
  const getData = async () => {
    let blogs = await axios.get("http://localhost:3000/blogs")
    dispatch(getBlogData(blogs.data))
  }

  useEffect(() => {
    getData()
  }, []);

  return (
    <div className="container">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                autoFocus
              />
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="url"
                placeholder="Enter image URL"
                value={img}
                onChange={(e) => setImg(e.target.value)}
                autoFocus
              />
              <Form.Label>Content</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter content"
                autoFocus
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="blog-grid">
        {blogs.map((ele) => (
          <div key={ele.id} className="blog-item">
            <h1 className="blog-title">{ele.title}</h1>
            <img src={ele.img} alt={ele.title} />
            <p className="blog-content">{ele.content}</p>
            <Button className="btn-delete" onClick={() => handleDelete(ele.id)}>
              Delete
            </Button>
            <Button className="btn-update" onClick={() => handleShow(ele)}>
              Update
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
