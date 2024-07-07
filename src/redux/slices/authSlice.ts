import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  value: AuthState;
}

type AuthState = {
  isAuth: boolean,
  userName: string,
  uid: string,
}

const initialState = {
  value: {
    isAuth: false,
    userName: "",
    uid: ""
  } as AuthState,
} as InitialState;

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
      
  }
})