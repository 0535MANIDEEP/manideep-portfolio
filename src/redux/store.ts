// ============================================================
// REDUX STORE
// ============================================================

import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';

// Custom localStorage adapter for ESM compatibility
const storage = {
  getItem: (key: string) => Promise.resolve(localStorage.getItem(key)),
  setItem: (key: string, value: string) => Promise.resolve(localStorage.setItem(key, value)),
  removeItem: (key: string) => Promise.resolve(localStorage.removeItem(key)),
};

import themeReducer from './slices/themeSlice';
import authReducer from './slices/authSlice';
import notificationReducer from './slices/notificationSlice';

const rootReducer = combineReducers({
  theme: themeReducer,
  auth: authReducer,
  notifications: notificationReducer,
});

const persistConfig = {
  key: 'portfolio-root',
  storage,
  whitelist: ['theme', 'auth'], // Persist theme and auth
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
