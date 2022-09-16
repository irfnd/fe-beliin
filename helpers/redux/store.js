import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";

import storage from "~/helpers/redux/storage";
import rootReducers from "~/helpers/redux/slices";

const persistConfig = {
	key: "beli.in",
	version: 1,
	whitelist: ["auth"],
	storage,
};

const persistedReducers = persistReducer(persistConfig, rootReducers);

export const store = configureStore({ reducer: persistedReducers, middleware: [thunk] });
export const persistor = persistStore(store);
