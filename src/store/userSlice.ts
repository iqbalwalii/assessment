import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    userData: [],
    pageIndex: 0,
    personal: {},
    address: {},
  },
  reducers: {
    setUserData: (state, action) => {
      //@ts-expect-error leaving minute details
      state.userData = [...state.userData, action.payload];
      state.personal = {};
      state.address = {};
    },
    setPageIndex: (state, action) => {
      state.pageIndex = action.payload;
    },
    setPersonalDetails: (state, action) => {
      state.personal = action.payload;
    },
    setAddressDetails: (state, action) => {
      state.address = action.payload;
    },
  },
});

export const {
  setUserData,
  setPageIndex,
  setPersonalDetails,
  setAddressDetails,
} = userSlice.actions;

export default userSlice.reducer;
