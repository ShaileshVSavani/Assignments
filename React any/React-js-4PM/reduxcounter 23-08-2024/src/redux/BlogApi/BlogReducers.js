import {
  CREATE_BLOG,
  DELETE_BLOG,
  FETCH_BLOG,
  GET_BLOGS,
  SINGLE_BLOG,
  UPDATE_BLOG,
} from "./ActionType";

const initialState = {
  blogs: [],
  blog: {},
  isLoading: false,
};

export const BlogReducerApi = (state = initialState, { action, payload }) => {
  switch (action) {
    case GET_BLOGS:
      return { ...state, blogs: payload, isLoading: false };

    case CREATE_BLOG:
      return { ...state, blogs: [...state.blogs, payload], isLoading: false };

    case DELETE_BLOG:
      return {
        ...state,
        blogs: state.blogs.filter((ele) => ele.id != payload),
        isLoading: false,
      };

    case SINGLE_BLOG:
      return { ...state, blog: payload, isLoading: false };

    case UPDATE_BLOG:
      return {
        ...state,
        blogs: state.blogs.map((ele) => (ele.id == payload.id ? payload : ele)),
        isLoading: false,
      };
    case FETCH_BLOG:
      return { ...state, isLoading: true };

    default:
      return state;
  }
};
