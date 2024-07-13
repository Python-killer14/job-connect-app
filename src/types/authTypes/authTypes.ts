import { DefaultSession } from "next-auth";

export interface UserSessionType {
  name: string,
  email: string,
  image: string,
}

export interface SessionType  {
  user: UserSessionType,
  expires: string
}



export type SignInFormTypes = {
  email: string,
  password: string,
}
export type SignUpFormTypes = SignInFormTypes & {
  firstName: string,
  lastName: string,
};


declare module "next-auth" {
  interface User {
    address?: string;
  }

export interface Session extends DefaultSession {
    user?: {
      id: string;
    } & DefaultSession['user'] & User
  }
}