import { createSlice } from "@reduxjs/toolkit";

export const menuBarSlice = createSlice({
  name: "menuBarState",
  initialState: {
    menuBarState: false
  } as {menuBarState: boolean},
  reducers: {
    hideMenuBar: (state) => {
      state.menuBarState = false;
    },
    showMenuBar: (state) => {
      state.menuBarState = true;
    }
  }
})

export const { hideMenuBar, showMenuBar} = menuBarSlice.actions
export default menuBarSlice.reducer;