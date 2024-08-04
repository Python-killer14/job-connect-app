import { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";


export interface UserSessionType {
  firstName: string,
  lastName: string,
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
    firstName: string;
    lastName: string,
  }

export interface Session extends DefaultSession {
    user?: {
      id: string;
      firstName: string,
      lastName: string,
      email: string,
      image: string,
    } & DefaultSession['user'] & User
  }
}


declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    firstName: string;
    lastName: string;
    email: string,
    image: string;
  }
}
