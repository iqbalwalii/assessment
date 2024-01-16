import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    userData: {},
    pageIndex: 0,
  },
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setPageIndex: (state, action) => {
      state.pageIndex = action.payload;
    },
  },
});

export const { setUserData, setPageIndex } = userSlice.actions;

export default userSlice.reducer;
