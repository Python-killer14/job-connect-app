import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import Google from "next-auth/providers/google"

export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: process.env.AUTH_SECRET,
  providers: [
    Google,
    Credentials({
      name: "credentials",
      credentials: {
        email: {
          label: "Email", type: "email", placeholder: "jsmith"
        },
        password: {label: "Password", type: "password"}

      }
    })
  ],
  pages: {
    signIn: "/signin"
  }
})