import { configureStore } from "@reduxjs/toolkit";
import {
	persistStore,
	persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactReducer } from "./contacts/contactsSlice";
import { filterReducer } from "./filter/filterSlice";
import { authReducer } from "./auth/authSlice";

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

export const store = configureStore({
	reducer: {
		auth: persistReducer(authPersistConfig, authReducer),
		contacts: contactReducer,
		filter: filterReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER,
				],
			},
		}),
});

export const persistor = persistStore(store);