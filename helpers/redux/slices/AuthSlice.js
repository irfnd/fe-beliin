import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoggedIn: false,
	user: null,
};

const AuthSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		register: (state, action) => {
			state.user = action.payload;
		},
		login: (state) => {
			state.isLoggedIn = true;
		},
		logout: () => initialState,
	},
});

export const AuthActions = AuthSlice.actions;
export const AuthReducers = AuthSlice.reducer;
