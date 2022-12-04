import { configureStore } from '@reduxjs/toolkit'
import videoReducer from './slice'

export default configureStore({
  reducer: {
    videoData: videoReducer,
  }
})