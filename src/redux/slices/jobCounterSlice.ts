import { createSlice } from "@reduxjs/toolkit"; 


export const jobCounterSlice = createSlice({
  name: "jobCounter",
  initialState: {
    jobCounter: 0
  } as {jobCounter: number},
  reducers: {
    setJobCounter: (state, action) => {
      state.jobCounter = action.payload;
    },
  }
})


export const { setJobCounter } = jobCounterSlice.actions;

export default jobCounterSlice.reducer;
