export interface UserSessionType {
  name: string,
  email: string,
  image: string,
}

export interface SessionType  {
  user: UserSessionType,
  expires: string
}