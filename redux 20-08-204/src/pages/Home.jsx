// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { DeleteBlog,  UpdateBlog } from "../redux/Blog/Action";
// import { DeleteBlogData, getBlogData } from "../redux/BlogApi/Action";
// import axios from "axios";


// const Home = () => {
//   const [show, setShow] = useState(false);
//   const [title, setTitle] = useState("");
//   const [img, setImg] = useState("");
//   const [id, setId] = useState("");
//   const [content, setContent] = useState("");

//   // const { blogs } = useSelector((store) => store.blogs);
//   const { blogs } = useSelector((store) => store.blogApi);
//   const dispatch = useDispatch();

//   const handleClose = () => {
//     setShow(false);
//     const blogData = {
//       id: id,
//       title: title,
//       content: content,
//       img: img,
//     };
//     dispatch(UpdateBlog(blogData));
//   };
//   // const handleSaveChanges = () => {
//   //   const blogData = {
//   //     id: id,
//   //     title: title,
//   //     content: content,
//   //     img: img,
//   //   };
//   //   dispatch(UpdateBlog(blogData));
//   // }

//   const handleShowUpdate = (ele) => {
//     setContent(ele.content);
//     setTitle(ele.title);
//     setImg(ele.img);
//     setId(ele.id);
//     setShow(true);
//   };

//   const handleDelete = (id) => {
//     // dispatch(DeleteBlog(id));
//     dispatch(DeleteBlogData(id));
//   };

//   const getData = async () => {
//     const blogs = await axios.get("http://localhost:3000/blogs");
//     dispatch(getBlogData(blogs.data));
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <div className="container mx-auto p-4">
//       {show && (
//         <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white rounded-lg p-6 w-1/2">
//             <h2 className="text-xl font-semibold mb-4">Update Blog</h2>
//             <form>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium">Title</label>
//                 <input
//                   type="text"
//                   placeholder="Enter title"
//                   value={title}
//                   onChange={(e) => setTitle(e.target.value)}
//                   className="w-full px-3 py-2 border rounded-md"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium">Image URL</label>
//                 <input
//                   type="url"
//                   placeholder="Enter image URL"
//                   value={img}
//                   onChange={(e) => setImg(e.target.value)}
//                   className="w-full px-3 py-2 border rounded-md"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium">Content</label>
//                 <textarea
//                   placeholder="Enter content"
//                   value={content}
//                   onChange={(e) => setContent(e.target.value)}
//                   className="w-full px-3 py-2 border rounded-md"
//                 />
//               </div>
//             </form>
//             <div className="flex justify-end space-x-4">
//               <button
//                 className="btn btn-secondary"
//                 onClick={handleClose}
//               >
//                 Close
//               </button>
//               <button
//                 className="btn btn-primary"
//                 onClick={handleClose}
//                 // onClick={handleSaveChanges}
//                 >
//                 Save Changes
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {blogs.map((ele) => (
//           <div
//             key={ele.id}
//             className="border rounded-lg p-4 shadow-md bg-white"
//           >
//             <h1 className="text-xl font-semibold mb-2">{ele.title}</h1>
//             <img
//               src={ele.img}
//               alt={ele.title}
//               className="w-full h-48 object-cover mb-4"
//             />
//             <p className="text-gray-700 mb-4">{ele.content}</p>
//             <div className="flex space-x-4">
//               <button
//                 className="btn btn-error"
//                 onClick={() => handleDelete(ele.id)}
//               >
//                 Delete
//               </button>
//               <button
//                 className="btn btn-info"
//                 onClick={() => handleShowUpdate(ele)}
//               >
//                 Update
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;



// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// import { DeleteBlogData, getBlogData, PostBlogData, UpdateBlogData } from "../redux/blogApi/Action";

// const Home = () => {
//   const [show, setShow] = useState(false);
//   const [title, setTitle] = useState("");
//   const [img, setImg] = useState("");
//   const [id, setId] = useState("");
//   const [content, setContent] = useState("");

//   const { blogs } = useSelector((store) => store.blogApi);
//   const dispatch = useDispatch();

//   const handleClose = () => {
//     setShow(false);
//     const blogData = {
//       id: id,
//       title: title,
//       content: content,
//       img: img,
//     };
//     dispatch(UpdateBlogData(id, blogData));
//   };

//   const handleShowUpdate = (ele) => {
//     setContent(ele.content);
//     setTitle(ele.title);
//     setImg(ele.img);
//     setId(ele.id);
//     setShow(true);
//   };

//   const handleDelete = (id) => {
//     dispatch(DeleteBlogData(id));
//   };



//   const getData = async () => {
//     dispatch(getBlogData());
//   };

//   useEffect(() => {
//     getData();
//   }, [dispatch]);

//   return (
//     <div className="container mx-auto p-4">
    

//       {show && (
//         <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white rounded-lg p-6 w-1/2">
//             <h2 className="text-xl font-semibold mb-4">Update Blog</h2>
//             <form>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium">Title</label>
//                 <input
//                   type="text"
//                   placeholder="Enter title"
//                   value={title}
//                   onChange={(e) => setTitle(e.target.value)}
//                   className="w-full px-3 py-2 border rounded-md"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium">Image URL</label>
//                 <input
//                   type="url"
//                   placeholder="Enter image URL"
//                   value={img}
//                   onChange={(e) => setImg(e.target.value)}
//                   className="w-full px-3 py-2 border rounded-md"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium">Content</label>
//                 <textarea
//                   placeholder="Enter content"
//                   value={content}
//                   onChange={(e) => setContent(e.target.value)}
//                   className="w-full px-3 py-2 border rounded-md"
//                 />
//               </div>
//             </form>
//             <div className="flex justify-end space-x-4">
//               <button className="btn btn-secondary" onClick={handleClose}>
//                 Close
//               </button>
//               <button className="btn btn-primary" onClick={handleClose}>
//                 Save Changes
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {blogs.map((ele) => (
//           <div
//             key={ele.id}
//             className="border rounded-lg p-4 shadow-md bg-white"
//           >
//             <h1 className="text-xl font-semibold mb-2">{ele.title}</h1>
//             <img
//               src={ele.img}
//               alt={ele.title}
//               className="w-full h-48 object-cover mb-4"
//             />
//             <p className="text-gray-700 mb-4">{ele.content}</p>
//             <div className="flex space-x-4">
//               <button
//                 className="btn btn-error"
//                 onClick={() => handleDelete(ele.id)}
//               >
//                 Delete
//               </button>
//               <button
//                 className="btn btn-info"
//                 onClick={() => handleShowUpdate(ele)}
//               >
//                 Update
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;


import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteBlogData, getBlogData, PostBlogData, UpdateBlogData } from "../redux/blogApi/Action";

const Home = () => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [id, setId] = useState("");
  const [content, setContent] = useState("");

  const { blogs } = useSelector((store) => store.blogApi);
  const dispatch = useDispatch();

  const handleClose = () => {
    setShow(false);
  };

  const handleSaveChanges = () => {
    const blogData = {
      title: title,
      content: content,
      img: img,
    };
    dispatch(UpdateBlogData(id, blogData));
    setShow(false);
  };

  const handleShowUpdate = (ele) => {
    setContent(ele.content);
    setTitle(ele.title);
    setImg(ele.img);
    setId(ele.id);
    setShow(true);
  };

  const handleDelete = (id) => {
    dispatch(DeleteBlogData(id));
  };

  const getData = async () => {
    dispatch(getBlogData());
  };

  useEffect(() => {
    getData();
  }, [dispatch]);

  return (
    <div className="container mx-auto p-4">
      {show && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-1/2">
            <h2 className="text-xl font-semibold mb-4">Update Blog</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium">Title</label>
                <input
                  type="text"
                  placeholder="Enter title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Image URL</label>
                <input
                  type="url"
                  placeholder="Enter image URL"
                  value={img}
                  onChange={(e) => setImg(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Content</label>
                <textarea
                  placeholder="Enter content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
            </form>
            <div className="flex justify-end space-x-4">
              <button className="btn btn-secondary" onClick={handleClose}>
                Close
              </button>
              <button className="btn btn-primary" onClick={handleSaveChanges}>
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map((ele) => (
          <div
            key={ele.id}
            className="border rounded-lg p-4 shadow-md bg-white"
          >
            <h1 className="text-xl font-semibold mb-2">{ele.title}</h1>
            <img
              src={ele.img}
              alt={ele.title}
              className="w-full h-48 object-cover mb-4"
            />
            <p className="text-gray-700 mb-4">{ele.content}</p>
            <div className="flex space-x-4">
              <button
                className="btn btn-error"
                onClick={() => handleDelete(ele.id)}
              >
                Delete
              </button>
              <button
                className="btn btn-info"
                onClick={() => handleShowUpdate(ele)}
              >
                Update
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
