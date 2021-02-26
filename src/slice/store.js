import { configureStore } from '@reduxjs/toolkit';

import {userSlice} from '../slice/usersSlice'

export default configureStore({
  reducer: {
    userState:userSlice.reducer
  },
});
