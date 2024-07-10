import React, { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

export interface Props {
  children: ReactNode;
}

const SessionProviderWrapper = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default SessionProviderWrapper;
