import { combineReducers } from 'redux'
import commentSlice from "./commentSlice";
import videoSlice from "./videoSlice";
import userSlice from "./userSlice";

const reducer = combineReducers({
    comments: commentSlice,
    videos: videoSlice,
    users: userSlice,
});

export default reducer;