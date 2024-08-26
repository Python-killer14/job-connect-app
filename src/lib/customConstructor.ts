import { AuthError } from "next-auth"

// Error custom error
export class customError extends AuthError {
  constructor(message: string, name: string) {
      super()
      this.message = message
      this.name = name
  }
}




