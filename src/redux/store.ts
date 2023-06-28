import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../redux/reducers";

// Create the Redux store using configureStore
const store = configureStore({
  reducer: rootReducer,
  middleware: (getdefaultMiddleware) => getdefaultMiddleware(),
});

export default store;
