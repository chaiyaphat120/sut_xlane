import { configureStore } from '@reduxjs/toolkit';

import {userSlice} from '../slice/usersSlice'
import {userFacebookSlice} from '../slice/dataUser'

export default configureStore({
  reducer: {
    userState:userSlice.reducer,
    userFacebookState:userFacebookSlice.reducer
  },
});
