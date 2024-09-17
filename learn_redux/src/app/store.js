import { configureStore } from '@reduxjs/toolkit';
import postReducer from '../features/posts/postSlice'
import usersReducer from '../features/Users/usersSlice';


export const store = configureStore({
    reducer: {
        posts: postReducer,
        users: usersReducer
    }
})