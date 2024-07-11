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
      },
      authorize: async (credentials) => {

        if (!credentials?.email || !credentials?.password) {
          return null
        }

        if (credentials.email === "rotes424@gmail.com" && credentials.password === "password") {
          return {
            id: "1",
            name: "John Doe",
            email: "rotes424@gmai.com",
          }
        }

        return null
      }

    })
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
  },

  pages: {
    signIn: "/signin",
  }
})