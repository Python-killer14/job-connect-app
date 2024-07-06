"use client"
import { ReactNode } from "react"
import { store } from "./store"
import { Provider } from "react-redux"

interface StoreProviderProps {
  children: ReactNode;
}

const  StoreProvider: FC<StoreProviderProps>({children}) => {
  return <Provider store={store}>{children}</Provider>;
}

export default StoreProvider