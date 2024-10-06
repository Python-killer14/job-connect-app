import { configureStore } from "@reduxjs/toolkit"
import menuBarSlice from "./slices/menuBarSlice"
import jobCounterSlice  from "./slices/jobCounterSlice"
import infoPaginationSlice  from "./slices/infoPaginationSlice"

export const store = configureStore({
    // Add reducers
    reducer: {
      menuBar: menuBarSlice,
      jobCounter: jobCounterSlice,
      infoPagination: infoPaginationSlice,
    }
  })


  export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
