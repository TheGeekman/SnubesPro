import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addDetails: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { addDetails } = userSlice.actions;

export default userSlice.reducer;
