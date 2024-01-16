import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

export const store = configureStore({
  reducer: {
    details: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
