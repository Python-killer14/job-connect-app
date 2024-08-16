import { AuthError } from "next-auth"

export class customError extends AuthError {
  constructor(message: string, name: string) {
      super()
      this.message = message
      this.name = name
  }
}