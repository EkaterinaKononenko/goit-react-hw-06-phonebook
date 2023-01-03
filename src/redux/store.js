import { configureStore } from "@reduxjs/toolkit";
import {persistedContacts} from './myValue/slice';
import {
  DEFAULT_VERSION,
  FLUSH,
  KEY_PREFIX,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistStore
} from 'redux-persist';

          

export const store = configureStore({
  reducer: {
    contacts: persistedContacts,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [
          DEFAULT_VERSION,
          FLUSH,
          KEY_PREFIX,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
          REHYDRATE,
        ],
      },
    });
  },
});


export const persistor = persistStore(store);

