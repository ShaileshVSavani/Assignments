import { CREATE_BLOG, DELETE_BLOG, SINGLE_BLOG, UPDATE_BLOG } from "./ActionType"

export const CreateBlog = (blog) => { 
    return {
        type: CREATE_BLOG,
        payload: blog
    }

}

export const UpdateBlog = ( blog) => { 
    return {
        type: UPDATE_BLOG,
        payload: blog
    }
}

export const DeleteBlog = (id) => {
    return {
        type: DELETE_BLOG,
        payload: id
    }
}
 
export const SingleBlog = (id) => {
    return {
      type: SINGLE_BLOG,
      payload: id,
    }
  }