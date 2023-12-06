import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userReducer from '../features/user/userSlice'
import newsReducer from '../features/newsApiAuthentication/newsSlice' 
export const store = configureStore({
  reducer: {
    user:userReducer,
    news:newsReducer
  },
});
