import { createSlice } from '@reduxjs/toolkit'
import { api } from '../api/user_api'

export const commentSlice = createSlice({
    name: 'commentData',
    initialState: {
        comments: []
    },
    reducers: {
        commentSuccess: (state, action) => {
            comments = action.payload;
        },
    },
})

const { commentSuccess } = commentSlice.actions

export default commentSlice.reducer

export const fetchComments = (videoId) => async dispatch => {
    try {
        await api.get(`/profile/${videoId}`)
            .then((response) => dispatch(commentSuccess(response.data)))
    }
    catch (e) {
        return console.error(e.message);
    }
}