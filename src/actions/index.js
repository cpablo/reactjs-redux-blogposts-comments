import jsonplaceholder from '../api/JsonPlaceholder';

export const fetchPosts = () => async (dispatch) => {
    let postResponse = await jsonplaceholder.get('/posts'); //We can now use async and await functions with redux-thunk

    dispatch({
        type: 'FETCH_POSTS',
        payload: postResponse.data
    });
};

export const fetchComments = (postId) => async (dispatch) => {
    let commentResponse = await jsonplaceholder.get(`/comments?postId=${postId}`);

    dispatch({
        type: 'FETCH_COMMENTS',
        payload: commentResponse.data
    });
}
