import { combineReducers } from 'redux'
import commentSlice from "./commentSlice";
import videoSlice from "./videoSlice";
import userSlice from "./userSlice";
import videoFileSlice from './videoFileSlice';

const reducer = combineReducers({
    comments: commentSlice,
    videos: videoSlice,
    users: userSlice,
    videoFile: videoFileSlice,
});

export default reducer;