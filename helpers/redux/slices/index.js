import { combineReducers } from "@reduxjs/toolkit";

import { AuthReducers } from "~/helpers/redux/slices/AuthSlice";

const rootReducers = combineReducers({
	auth: AuthReducers,
});

export default rootReducers;
