import { configureStore } from "@reduxjs/toolkit"
import menuBarSlice from "./slices/menuBarSlice"

export const store = configureStore({
    // Add reducers
    reducer: {
      menuBar: menuBarSlice
    }
  })


  export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
