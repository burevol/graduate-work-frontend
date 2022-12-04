import { createSlice } from '@reduxjs/toolkit'
import { api } from '../api/user_api'

export const videoFileSlice = createSlice({
    name: 'videoFileData',
    initialState: {
        id: 0,
        header: "",
        author: "",
        preview: "",
        date: "",
        link: "",
        loaded: false
    },
    reducers: {
        startLoading: (state, action) => {
            state.loaded = false;
        },
        videoFileSuccess: (state, action) => {
            ({ id: state.id, header: state.header, author: state.author, preview: state.preview, date: state.date, link: state.link } = action.payload[0])
            state.loaded = true;
        },
    },
})

const { videoFileSuccess, startLoading } = videoFileSlice.actions

export default videoFileSlice.reducer

export const fetchVideoFile = (videoId) => async dispatch => {
    dispatch(startLoading());
    try {
        await api.get(`/videos?id=${videoId}`)
            .then((response) => dispatch(videoFileSuccess(response.data)))
    }
    catch (e) {
        return console.error(e.message);
    }
}