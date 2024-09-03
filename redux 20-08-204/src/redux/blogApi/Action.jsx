// import axios from "axios";
// import { CREATE_BLOG, FETCH_BLOG,  GET_BLOGS } from "./Actiontype";

// export const getBlog = () => async (dispatch) => {
//   console.log("getBlogs");

//     dispatch({
//       type: FETCH_BLOG,
//     });

//   try {
//     let blogs = await axios.get(`http://localhost:3000/blogs`);
//     // dispatch({
//     //   type: GET_BLOG,
//     //   payload: blogs.data,
//     // });
//     dispatch(getBlogData(blogs.data));
//     console.log(blogs.data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const postBlog = (blog) => async (dispatch) => {
//   dispatch({
//     type: FETCH_BLOG,
//   });
//   try {
//     let blogs = await axios.post(`http://localhost:3000/blogs`, blog);
//     dispatch({
//       type: CREATE_BLOG,
//       payload: blogs.data,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// // export const getBlogData = (blogs) => {
// //   console.log("blogs", blogs);

// //   return {
// //     type: GET_BLOGS,
// //     payload: blogs,
// //   };
// // };


// export const getBlogData = (blogs) => async(dispatch) => {
//   console.log("blogs", blogs);

//   dispatch( {
//     type: GET_BLOGS,
//     payload: blogs,
//   });
// };

// export const DeleteBlogData = (id) => async (dispatch) => {
//   console.log("Delete blogs");
//   dispatch({
//     type: FETCH_BLOG,
//   });

// }


// import axios from "axios";
// import { CREATE_BLOG, FETCH_BLOG, GET_BLOGS, DELETE_BLOG, UPDATE_BLOG } from "./Actiontype";

// // Get all blogs
// export const getBlogData = () => async (dispatch) => {
//   dispatch({ type: FETCH_BLOG });
//   try {
//     let blogs = await axios.get(`http://localhost:3000/blogs`);
//     dispatch({
//       type: GET_BLOGS,
//       payload: blogs.data,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// // Post a new blog
// export const PostBlogData = (blog) => async (dispatch) => {
//   dispatch({ type: FETCH_BLOG });
//   try {
//     let response = await axios.post(`http://localhost:3000/blogs`, blog);
//     dispatch({
//       type: CREATE_BLOG,
//       payload: response.data,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// // Delete a blog
// export const DeleteBlogData = (id) => async (dispatch) => {
//   dispatch({ type: FETCH_BLOG });
//   try {
//     await axios.delete(`http://localhost:3000/blogs/${id}`);
//     dispatch({
//       type: DELETE_BLOG,
//       payload: id,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// // Update (patch) a blog
// export const UpdateBlogData = (id, updatedData) => async (dispatch) => {
//   dispatch({ type: FETCH_BLOG });
//   try {
//     let response = await axios.patch(`http://localhost:3000/blogs/${id}`, updatedData);
//     dispatch({
//       type: UPDATE_BLOG,
//       payload: response.data,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };



// import axios from "axios";
// import { CREATE_BLOG, FETCH_BLOG, GET_BLOGS, DELETE_BLOG, UPDATE_BLOG } from "./Actiontype";

// // Get all blogs
// export const getBlogData = () => async (dispatch) => {
//   dispatch({ type: FETCH_BLOG });
//   try {
//     const response = await axios.get(`http://localhost:3000/blogs`);
//     dispatch({
//       type: GET_BLOGS,
//       payload: response.data,
//     });
//   } catch (error) {
//     console.error("Error fetching blogs:", error);
//   }
// };

// // Post a new blog
// export const PostBlogData = (blog) => async (dispatch) => {
//   dispatch({ type: FETCH_BLOG });
//   try {
//     const response = await axios.post(`http://localhost:3000/blogs`, blog);
//     dispatch({
//       type: CREATE_BLOG,
//       payload: response.data,
//     });
//   } catch (error) {
//     console.error("Error posting blog:", error);
//   }
// };

// // Delete a blog
// export const DeleteBlogData = (id) => async (dispatch) => {
//   dispatch({ type: FETCH_BLOG });
//   try {
//     await axios.delete(`http://localhost:3000/blogs/${id}`);
//     dispatch({
//       type: DELETE_BLOG,
//       payload: id,
//     });
//   } catch (error) {
//     console.error("Error deleting blog:", error);
//   }
// };

// // Update (patch) a blog
// export const UpdateBlogData = (id, updatedData) => async (dispatch) => {
//   dispatch({ type: FETCH_BLOG });
//   try {
//     const response = await axios.patch(`http://localhost:3000/blogs/${id}`, updatedData);
//     dispatch({
//       type: UPDATE_BLOG,
//       payload: response.data,
//     });
//   } catch (error) {
//     console.error("Error updating blog:", error);
//   }
// };



import axios from "axios";
import { CREATE_BLOG, FETCH_BLOG, GET_BLOGS, DELETE_BLOG, UPDATE_BLOG } from "./Actiontype";

// Get all blogs
export const getBlogData = () => async (dispatch) => {
  dispatch({ type: FETCH_BLOG });
  try {
    const response = await axios.get(`http://localhost:3000/blogs`);
    dispatch({
      type: GET_BLOGS,
      payload: response.data,
    });
  } catch (error) {
    console.error("Error fetching blogs:", error);
  }
};

// Post a new blog
export const PostBlogData = (blog) => async (dispatch) => {
  dispatch({ type: FETCH_BLOG });
  try {
    const response = await axios.post(`http://localhost:3000/blogs`, blog);
    dispatch({
      type: CREATE_BLOG,
      payload: response.data,
    });
  } catch (error) {
    console.error("Error posting blog:", error);
  }
};

// Delete a blog
export const DeleteBlogData = (id) => async (dispatch) => {
  dispatch({ type: FETCH_BLOG });
  try {
    await axios.delete(`http://localhost:3000/blogs/${id}`);
    dispatch({
      type: DELETE_BLOG,
      payload: id,
    });
  } catch (error) {
    console.error("Error deleting blog:", error);
  }
};

// Update (patch) a blog
export const UpdateBlogData = (id, updatedData) => async (dispatch) => {
  dispatch({ type: FETCH_BLOG });
  try {
    const response = await axios.patch(`http://localhost:3000/blogs/${id}`, updatedData);
    dispatch({
      type: UPDATE_BLOG,
      payload: response.data,
    });
  } catch (error) {
    console.error("Error updating blog:", error);
  }
};
