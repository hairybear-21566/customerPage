import * as api from '../api';
import { FETCH_ALL, UPDATE, DELETE, CREATE } from '../constants/actionTypes';
//{FETCH_ALL,UPDATE,LIKEPOST,DELETE,CREATE}
//Action Creators 
export const getPosts = () => async(dispatch) => {
    try {
        const { data } = await api.fetchPosts()
        dispatch({ type: FETCH_ALL, payload: data }); //action dispatching
    } catch (error) {
        console.log(error);
    }
}

export const createPost = (post) => async(dispatch) => {
    try {
        const { data } = await api.createPost(post);

        dispatch({ type: CREATE, payload: data });
        console.log(post);
        console.log(data)
    } catch (error) {
        console.log(error.message);
    }
};

export const updatePost = (id, post) => async(dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);
        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const deletePost = (id) => async(dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error.message);
    }
};

export const mintPost = (id) => async(dispatch) => {
    try {
        const { data } = await api.mintPost(id);

        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error)
    }
};