import {
  CREATE_BLOG,
  DELETE_BLOG,
  SINGLE_BLOG,
  UPDATE_BLOG,
} from "./ActionType";

let initialState = {
  blogs: [],
  singleBlog: {},
};

export const BlogReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_BLOG:
      return { ...state, blogs: [...state.blogs, payload] };

    case DELETE_BLOG:
      return {
        ...state,
        blogs: state.blogs.filter((ele) => ele.id != payload),
      };

    case SINGLE_BLOG:
      let findBlog = state.blogs.filter((ele) => ele.id == payload);

      return { ...state, singleBlog: findBlog };

    case UPDATE_BLOG:
      return {
        ...state,
        blogs: state.blogs.map((ele) => (ele.id == payload.id ? payload : ele)),
      };

    default:
      return state;
  }
};
