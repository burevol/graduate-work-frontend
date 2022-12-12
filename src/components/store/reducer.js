import { combineReducers } from 'redux'
import commentSlice from "./commentSlice";
import videoSlice from "./videoSlice";
import userSlice from "./userSlice";
import userDataSlice from './userDataSlice';

const reducer = combineReducers({
    comments: commentSlice,
    videos: videoSlice,
    users: userSlice,
    profileData: userDataSlice,
});

export default reducer;