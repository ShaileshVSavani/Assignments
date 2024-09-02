import axios from "axios";
import { CREATE_BLOG, FETCH_BLOG,  GET_BLOGS } from "./Actiontype";

export const getBlog = () => async (dispatch) => {
  console.log("getBlogs");

  //   dispatch({
  //     type: FETCH_BLOG,
  //   });

  try {
    let blogs = await axios.get(`http://localhost:3000/blogs`);
    // dispatch({
    //   type: GET_BLOG,
    //   payload: blogs.data,
    // });
    dispatch(getBlogData(blogs.data));
    console.log(blogs.data);
  } catch (error) {
    console.log(error);
  }
};

export const postBlog = (blog) => async (dispatch) => {
  // dispatch({
  //   type: FETCH_BLOG,
  // });
  try {
    let blogs = await axios.post(`http://localhost:3000/blogs`, blog);
    dispatch({
      type: CREATE_BLOG,
      payload: blogs.data,
    });
  } catch (error) {
    console.log(error);
  }
};

// export const getBlogData = (blogs) => {
//   console.log("blogs", blogs);

//   return {
//     type: GET_BLOGS,
//     payload: blogs,
//   };
// };


export const getBlogData = (blogs) => async(dispatch) => {
  console.log("blogs", blogs);

  dispatch( {
    type: GET_BLOGS,
    payload: blogs,
  });
};