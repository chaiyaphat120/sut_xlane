import { configureStore } from '@reduxjs/toolkit';

import {userSlice} from '../slice/usersSlice'
import {userFacebookSlice} from '../slice/dataUser'
import {configNavogationSlice} from '../slice/configNavogationSlice'
export default configureStore({
  reducer: {
    userState:userSlice.reducer,
    userFacebookState:userFacebookSlice.reducer,
    configNavogationState:configNavogationSlice.reducer

  },
});
