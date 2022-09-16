import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoggedIn: false,
	user: null,
};

const AuthSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login: (state, action) => {
			state.isLoggedIn = true;
			state.user = action.payload;
		},
		logout: () => initialState,
	},
});

export const AuthActions = AuthSlice.actions;
export const AuthReducers = AuthSlice.reducer;
