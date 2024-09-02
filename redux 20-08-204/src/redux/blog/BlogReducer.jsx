import { SingleBlog } from "./Action"
import { CREATE_BLOG, DELETE_BLOG, SINGLE_BLOG, UPDATE_BLOG } from "./ActionType"

let initialState = {
    blogs: [],
    SingleBlog : {}
}

export const BlogReducer = (state = initialState, action) => {/*{ type, payload} = action */
    switch (action.type) {
        case CREATE_BLOG:
            return {
                ...state, blogs: [...state.blogs, action.payload]
            }
        case UPDATE_BLOG:
            return {
                ...state, blogs: state.blogs.map(blog => blog.id === action.payload.id? action.payload : blog)
            }
        case DELETE_BLOG:
            return {
               ...state, blogs: state.blogs.filter(blog => blog.id!== action.payload)
            }
        case SINGLE_BLOG: {
            let findBlog = state.blogs.filter((blog) => blog.id == action.payload);
          
                return { ...state, SingleBlog: findBlog };
            }
                

        default:
            return state;
    }
}