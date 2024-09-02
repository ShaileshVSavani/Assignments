import { CREATE_BLOG, DELETE_BLOG, FETCH_BLOG, FETCHED_BLOG,  GET_BLOGS, SINGLE_BLOG, UPDATE_BLOG } from "./Actiontype"

const initialState = {
    blogs: [],
    blog: {},
    isLoading: false
}

export const BlogApiReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_BLOGS:
            return { ...state, blogs: payload, isLoading: false }
        case CREATE_BLOG:
            return {...state, blogs: [...state.blogs, payload], isLoading: false }
        case DELETE_BLOG:
            return { ...state, blogs: state.blogs.filter(blog => blog.id !== payload), isLoading: false }
        case SINGLE_BLOG:
            return { ...state, blog: payload, isLoading: false }
        case UPDATE_BLOG:
            return {...state, blogs: state.blogs.map(blog => blog.id === payload.id? payload : blog), isLoading: false }
        case FETCH_BLOG:
            return { ...state, isLoading: true }
        default:
            return state;

    }
}