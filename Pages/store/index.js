import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import preferencesReducer from './slices/preferencesSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    preferences: preferencesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: true,
  }),
});

export default store;
export const AppDispatch = store.dispatch;

