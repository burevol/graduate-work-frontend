
import { createSlice } from '@reduxjs/toolkit'
import { api } from '../api/user_api'

export const counterSlice = createSlice({
    name: 'videoData',
    initialState: {
        username: '',
        img: '',
        value: 0,
        videos: [],
    },
    reducers: {
        profileSuccess: (state, action) => {
            ({ username: state.username, img: state.img } = action.payload)
            state.isLoading = false;
        },
        videoSuccess: (state, action) => {
            state.videos = action.payload;
        }
    },
});

const { profileSuccess, videoSuccess } = counterSlice.actions

export default counterSlice.reducer

// Actions

export const fetchProfile = () => async dispatch => {
    try {
        await api.get('/profile')
            .then((response) => dispatch(profileSuccess(response.data)))
    }
    catch (e) {
        return console.error(e.message);
    }
}

export const fetchVideo = () => async dispatch => {
    try {
        await api.get('/videos')
            .then((responce) => dispatch(videoSuccess(responce.data)))
    }
    catch (e) {
        return console.error(e.message);
    }
}