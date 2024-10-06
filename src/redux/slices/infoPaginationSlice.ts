import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentStep: 1
}

export const infoPaginationSlice = createSlice({
  name: "infoPagination",
  initialState,
  reducers: {
    incrementPagination: (state) => {
      if (state.currentStep < 3) {
        state.currentStep += 1
      }
    },
    decrementPagination: (state) => {
      if (state.currentStep > 1 ) {
        state.currentStep -= 1
      }
    }
  }
})


export const { incrementPagination, decrementPagination } = infoPaginationSlice.actions
export default infoPaginationSlice.reducer