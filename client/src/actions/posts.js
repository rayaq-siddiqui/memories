import * as api from '../api';

// Action Creators
// using redux thunk
export const getPosts = () => async (dispath) => {
    try {
        const { data } = await api.fetchPosts();
        const action = {
            type: 'FETCH_ALL',
            payload: data
        };
        dispath(action);
    }
    catch(error) {
        console.log(error.message);
    }
}

// more redux actions being created
export const createPost = (post) => async (dispath) => {
    try {
        const { data } = await api.createPost(post);
        dispatchEvent({ type: 'CREATE', payload: data })
    } catch (error) {
        console.log(error.message);
    }
}
