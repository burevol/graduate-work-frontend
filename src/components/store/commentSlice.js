import { createSlice } from '@reduxjs/toolkit'
import { api } from '../api/user_api'

export const commentSlice = createSlice({
    name: 'commentSlice',
    initialState: {
        comments: []
    }
}  
)